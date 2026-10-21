import crypto, { type KeyObject, X509Certificate } from "crypto";
import tls from "tls";

/**
 * SPKI SHA-256 hashes of the eight eMudhra intermediate keys disclosed on
 * 20 Oct 2026. The roots those intermediates chain to stay trusted.
 * https://emudhra.we-have-a-problem.com
 */
const DISTRUSTED_SPKI_SHA256 = new Set([
  "EBED6475C2C2D80FCB199F3FE8DD6E6B3CE60B77EB15D4E42C3DEC0C6F5B5105",
  "43BFFA19D6EF651451F6841E019931E96F6F2EAEFF28AB4B6F1CE4576DE2717B",
  "E0254C7FCDC265E2F0F8A428DABB75AB4AE039B4872D62F5EE57F0877D5A8A41",
  "49DD353DC2B919A3770645117D0E60C16115E7D1BC259EEFE734B00EA434FE5F",
  "63ECEFEE431D49523BC1136C4E72D0206A477086CAF606CD5CF025686C109CF8",
  "5C0660A2B164910D8FF589C18E14552E9E0EC237DCEFE2CB736D41A4811F81A0",
  "EC4FFA1AD0AC88081314B7AAFFEF6A91F97CD57291BB5BA686C5415F5EB4F6B6",
  "92C063D67E8F14DB71D288E11266FFDAF69CBF115F7BAB14F3BC2F68D25E0E30",
]);

const installed = Symbol.for("masterpet.distrustEmudhra");

function spkiSha256(raw: Buffer): string | null {
  try {
    const certificate = new X509Certificate(raw);
    const publicKey = certificate.publicKey as KeyObject;
    const der = publicKey.export({ type: "spki", format: "der" });
    return crypto.createHash("sha256").update(der).digest("hex").toUpperCase();
  } catch {
    return null;
  }
}

type DetailedCertificate = tls.PeerCertificate & {
  issuerCertificate?: DetailedCertificate;
};

function chainIncludesDistrustedIntermediate(cert: DetailedCertificate): boolean {
  let current: DetailedCertificate | undefined = cert;
  const seen = new Set<DetailedCertificate>();

  while (current && !seen.has(current)) {
    seen.add(current);
    if (current.raw) {
      const hash = spkiSha256(current.raw);
      if (hash && DISTRUSTED_SPKI_SHA256.has(hash)) return true;
    }
    if (!current.issuerCertificate || current.issuerCertificate === current) break;
    current = current.issuerCertificate;
  }

  return false;
}

export function installDistrustedEmudhraIntermediates(): void {
  const tlsWithMark = tls as typeof tls & { [installed]?: boolean };
  if (tlsWithMark[installed]) return;
  tlsWithMark[installed] = true;

  const checkServerIdentity = tls.checkServerIdentity;
  tls.checkServerIdentity = (hostname, cert) => {
    const error = checkServerIdentity(hostname, cert);
    if (error) return error;
    if (chainIncludesDistrustedIntermediate(cert as DetailedCertificate)) {
      return new Error("certificate chain includes a distrusted eMudhra intermediate");
    }
    return undefined;
  };
}

installDistrustedEmudhraIntermediates();
