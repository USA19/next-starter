import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  async function middleware(req) {
    const {
      nextauth: {
        token: { token },
      },
    } = req;

    if (req.method === "GET" && ["login", "signup"].includes(req.url)) {
      // Assuming you have a function to get the session data
      if (token) {
        res.writeHead(302, { Location: "/dashboard" }); // Redirect to dashboard or any other private route
        res.end();
        return;
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log(token, "token>>>>>>>>>>");
        // const { user, token: accessToken } = token || {};

        return !!token;
      },
    },
  }
);

export const config = { matcher: ["/", "/blog"] };
