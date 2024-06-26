import axios from "@/lib/axios";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
          const { email = "", password = "" } = credentials || {};
          const { data: { access_token = "" } = {} } = await axios.post(
            "/users/login",
            {
              email,
              password,
            }
          );

          if (access_token) {
            const { data: { user = null } = {} } = await axios.get(
              "/users/me",
              {
                headers: { authorization: `Bearer ${access_token}` },
              }
            );

            return { ...(user || {}), token: access_token };
          }

          return null;
        } catch (error) {
          return null;
        }
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

  session: {
    maxAge: 12 * 60 * 60,
  },

  callbacks: {
    jwt({ token, user }) {
      return { ...user, ...token };
    },

    async signIn() {
      // Custom logic to handle sign-in events
      return true; // Must return true to indicate successful sign-in
    },

    async session({ session, token: user }) {
      // this is the function which is responsible for sending the data in
      // useSession or useServerProps
      // import { useSession } from "next-auth/react"; for client components
      // import { getServerSession } from "next-auth/next";
      // const { user, token } = await getServerSession(authOptions)
      const { token } = user || {};
      session.user = user;
      session.token = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
