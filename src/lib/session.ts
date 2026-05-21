/** Shared session check for middleware and server auth. */
export function hasValidSessionToken(token: string | undefined): boolean {
  return Boolean(token && token.length > 0);
}
