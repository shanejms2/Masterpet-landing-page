import { Client as SSHClient } from 'ssh2';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import mysql from 'mysql2/promise';

type TunnelHandle = {
  ssh: SSHClient;
  localPort: number;
  close: () => Promise<void>;
};

let activeTunnel: TunnelHandle | null = null;

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

async function openSshTunnel(): Promise<TunnelHandle> {
  if (activeTunnel) {
    return activeTunnel;
  }

  const sshHost = getRequiredEnv('SSH_HOST');
  const sshPort = parseInt(process.env.SSH_PORT || '22', 10);
  const sshUsername = getRequiredEnv('SSH_USERNAME');
  const sshKeyPath = process.env.SSH_KEY_PATH || process.env.SSH_KEY_FILE;
  const sshTimeoutMs = parseInt(process.env.SSH_TIMEOUT || '30000', 10);
  const localPort = parseInt(process.env.SSH_TUNNEL_LOCAL_PORT || '3307', 10);

  if (!sshKeyPath) {
    throw new Error('Missing SSH key path. Set SSH_KEY_PATH or SSH_KEY_FILE.');
  }

  const ssh = new SSHClient();

  const resolveKeyPath = (p: string): string => {
    if (p.startsWith('~')) {
      return path.join(os.homedir(), p.slice(1));
    }
    return p;
  };

  const forwardPromise = new Promise<void>((resolve, reject) => {
    ssh.on('ready', () => {
      ssh.forwardOut(
        '127.0.0.1',
        0,
        getRequiredEnv('ERPNEXT_DB_HOST'),
        parseInt(process.env.ERPNEXT_DB_PORT || '3306', 10),
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        }
      );
    });

    ssh.on('error', reject);

    const cfg: Record<string, unknown> = {
      host: sshHost,
      port: sshPort,
      username: sshUsername,
      readyTimeout: sshTimeoutMs,
      keepaliveInterval: 60_000,
      keepaliveCountMax: 3,
    };
    try {
      cfg.privateKey = fs.readFileSync(resolveKeyPath(sshKeyPath));
    } catch {}
    if (process.env.SSH_KEY_PASSPHRASE) {
      cfg.passphrase = process.env.SSH_KEY_PASSPHRASE;
    }
    if (process.env.SSH_PASSWORD) {
      cfg.password = process.env.SSH_PASSWORD;
    }
    if (process.env.SSH_AUTH_SOCK) {
      cfg.agent = process.env.SSH_AUTH_SOCK;
    }

    ssh.connect(cfg);
  });

  // Wait for connection to be ready
  await forwardPromise;

  activeTunnel = {
    ssh,
    localPort,
    close: async () => {
      return new Promise<void>((resolve) => {
        ssh.end();
        ssh.once('close', () => {
          activeTunnel = null;
          resolve();
        });
      });
    },
  };

  return activeTunnel;
}

async function createMySqlConnectionOverSSH() {
  if (process.env.ERPNEXT_USE_LOCAL_TUNNEL === 'true') {
    const connection = await mysql.createConnection({
      user: getRequiredEnv('ERPNEXT_DB_USER'),
      password: getRequiredEnv('ERPNEXT_DB_PASSWORD'),
      database: getRequiredEnv('ERPNEXT_DB_NAME'),
      host: '127.0.0.1',
      port: parseInt(process.env.SSH_TUNNEL_LOCAL_PORT || '3307', 10),
    } as unknown as mysql.ConnectionOptions);
    return connection;
  }

  const { ssh } = await openSshTunnel();

  // Create a custom stream via ssh.forwardOut for mysql socket
  const createSshStream = (): Promise<NodeJS.ReadWriteStream> => {
    return new Promise((resolve, reject) => {
      ssh.forwardOut('127.0.0.1', 0, getRequiredEnv('ERPNEXT_DB_HOST'), parseInt(process.env.ERPNEXT_DB_PORT || '3306', 10), (err, stream) => {
        if (err) return reject(err);
        resolve(stream);
      });
    });
  };

  const connection = await mysql.createConnection({
    user: getRequiredEnv('ERPNEXT_DB_USER'),
    password: getRequiredEnv('ERPNEXT_DB_PASSWORD'),
    database: getRequiredEnv('ERPNEXT_DB_NAME'),
    stream: await createSshStream(),
  } as unknown as mysql.ConnectionOptions);

  return connection;
}

export async function checkErpnextConnectivity(): Promise<{ connected: boolean; version?: string; error?: string }>
{
  try {
    const conn = await createMySqlConnectionOverSSH();
    const [rows] = await conn.query('SELECT VERSION() as version');
    await conn.end();
    return { connected: true, version: (rows as Array<{ version: string }>)[0]?.version };
  } catch (error: unknown) {
    let message = 'Unknown error';
    if (error && typeof error === 'object' && 'message' in error && typeof (error as { message?: unknown }).message === 'string') {
      message = (error as { message: string }).message;
    }
    return { connected: false, error: message };
  } finally {
    if (activeTunnel) {
      await activeTunnel.close().catch(() => {});
    }
  }
}


