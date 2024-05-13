import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const {
      nextUrl: { pathname },

      nextauth: { token },
    } = req;

    if (pathname.startsWith("/auth") && token) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (["/", "/blog"].includes(pathname) && !token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const {
          nextUrl: { pathname },
        } = req;

        return (!token && pathname.startsWith("/auth")) || !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"], // will execute the middleware on every route
};
