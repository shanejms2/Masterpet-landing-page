import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasValidSessionToken } from "@/lib/session";

const PROTECTED_API_PREFIXES = [
  "/api/vennala",
  "/api/ai",
  "/api/upload",
  "/api/users",
  "/api/proxy-grooming",
  "/api/generate-grooming-report",
  "/api/bookings",
  "/api/erpnext",
] as const;

function isProtectedApi(pathname: string): boolean {
  return PROTECTED_API_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("session-token")?.value;
  const isAuthenticated = hasValidSessionToken(sessionToken);

  if (pathname.startsWith("/dashboard") && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isProtectedApi(pathname) && !isAuthenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const response = NextResponse.next();

  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  return response;
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
