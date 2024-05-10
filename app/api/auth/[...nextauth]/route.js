import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export const authOptions = {
  pages: {
    signIn: "/auth/login",
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials, _req) {
        try {
          const { email, password } = credentials;

          const response = await axios.post(
            "http://localhost:3001/users/login",
            {
              email,
              password,
            }
          );

          const {
            data: { access_token },
          } = response;

          if (access_token) {
            const {
              data: { user },
            } = await axios.get("http://localhost:3001/users/me", {
              headers: {
                authorization: `Bearer ${access_token}`,
              },
            });

            return { token: access_token, user };
          }
          return null;
        } catch (error) {}
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],

  basePath: "/auth",

  session: {
    jwt: true,
    maxAge: 12 * 60 * 60,
    callback: async (session, user) => {
      session.user = user;
      return Promise.resolve(session);
    },
  },

  callbacks: {
    jwt({ token, user }) {
      return { ...user, ...token };
    },

    async signIn(user, account, profile) {
      // Custom logic to handle sign-in events
      return true; // Must return true to indicate successful sign-in
    },

    async session({ session, token }) {
      // this is the function which is responsible for sending the data in
      // useSession or useServerProps
      const { user, token: access_token } = token || {};
      session.user = user;
      session.token = access_token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
