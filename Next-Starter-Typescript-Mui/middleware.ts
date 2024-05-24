import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const {
    nextUrl: { pathname },
    auth,
  } = req;

  if (pathname.startsWith("/auth") && auth) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (["/", "/blog"].includes(pathname) && !auth) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"], // will execute the middleware on every route
};
