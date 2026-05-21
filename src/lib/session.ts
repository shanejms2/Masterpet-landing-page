import { createHmac, randomBytes, timingSafeEqual } from "crypto";

function getSessionSecret(): string | null {
  return process.env.SESSION_SECRET ?? process.env.ADMIN_PASSWORD ?? null;
}

/** Create a signed session token for the session cookie. */
export function createSessionToken(): string | null {
  const secret = getSessionSecret();
  if (!secret) return null;

  const payload = randomBytes(32).toString("hex");
  const signature = createHmac("sha256", secret).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

/** Validate session cookie value (rejects legacy literal "authenticated"). */
export function hasValidSessionToken(token: string | undefined): boolean {
  const secret = getSessionSecret();
  if (!secret || !token) return false;

  const dot = token.indexOf(".");
  if (dot <= 0) return false;

  const payload = token.slice(0, dot);
  const signature = token.slice(dot + 1);
  if (!payload || !signature) return false;

  const expected = createHmac("sha256", secret).update(payload).digest("hex");

  try {
    const sigBuf = Buffer.from(signature, "hex");
    const expBuf = Buffer.from(expected, "hex");
    if (sigBuf.length !== expBuf.length) return false;
    return timingSafeEqual(sigBuf, expBuf);
  } catch {
    return false;
  }
}
