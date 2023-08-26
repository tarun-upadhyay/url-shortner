import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/register";

  const token = request.cookies.get("next-auth.session-token")?.value || "";

  if (isPublicPath && token)
    return NextResponse.redirect(new URL("/", request.nextUrl));

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = { matcher: ["/", "/register", "/login"] };
