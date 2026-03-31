/**
 * GET /demo
 *
 * Sets the demo session cookie and redirects to the portal dashboard.
 * Lets anyone preview the client portal without needing real auth credentials.
 * Remove this route (or the cookie check in middleware) when Clerk is wired up.
 */
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const destination = new URL("/portal/dashboard", req.url);
  const response = NextResponse.redirect(destination);

  // Sets the same cookie the middleware checks for
  response.cookies.set("dogood_session", "demo", {
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });

  return response;
}
