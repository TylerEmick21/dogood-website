/**
 * Next.js Middleware — Route Protection
 *
 * Protects /portal/* routes. Redirects unauthenticated users to /login.
 *
 * Auth strategy:
 *  - Currently checks for a simple session cookie ("dogood_session") as a
 *    placeholder. Replace with Clerk's `authMiddleware` once Clerk is wired up.
 *
 * To enable Clerk:
 *  1. npm install @clerk/nextjs
 *  2. Replace this file with:
 *     import { authMiddleware } from "@clerk/nextjs";
 *     export default authMiddleware({ publicRoutes: [...] });
 *     export const config = { matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"] };
 */

import { NextRequest, NextResponse } from "next/server";

// Routes that require authentication
const PROTECTED_PREFIXES = ["/portal"];

// Routes that are always public (even if they match a protected prefix)
const PUBLIC_ROUTES = new Set(["/login", "/apply", "/"]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if this is a protected route
  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (!isProtected || PUBLIC_ROUTES.has(pathname)) {
    return NextResponse.next();
  }

  // ── Placeholder auth check ────────────────────────────────────
  // Replace with Clerk session check in production:
  //   const { userId } = getAuth(req);
  //   if (!userId) { ... redirect to login ... }

  const sessionCookie = req.cookies.get("dogood_session");
  const isAuthenticated = Boolean(sessionCookie?.value);

  // During development, bypass auth so portal pages are accessible
  const isDev = process.env.NODE_ENV === "development";

  // Set DEMO_MODE=true in Cloudflare env vars to allow portal access without auth
  const isDemoMode = process.env.DEMO_MODE === "true";

  if (!isAuthenticated && !isDev && !isDemoMode) {
    const loginUrl = new URL("/login", req.url);
    // Pass the intended destination so login can redirect back
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Add portal user context headers (Clerk does this automatically)
  const response = NextResponse.next();
  response.headers.set("x-portal-route", "true");
  return response;
}

export const config = {
  matcher: [
    // Run on all routes except static files, _next, and API routes
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
