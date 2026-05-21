import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { hasValidSessionToken } from "@/lib/session";

/** Returns 401 response if the request is not authenticated; otherwise null. */
export async function requireApiAuth(): Promise<NextResponse | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("session-token")?.value;

  if (!hasValidSessionToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
