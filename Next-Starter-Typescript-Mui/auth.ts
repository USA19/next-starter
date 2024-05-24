import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { client } from "./api-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/auth/login",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },

      async authorize(credentials, _req): Promise<User | null> {
        try {
          const { email = "", password = "" } = credentials || {};
          const { data: { access_token = "" } = {} } = await client.POST(
            "/users/login",
            {
              body: { email: email as string, password: password as string },
            }
          );

          if (access_token) {
            const { data: { user = null } = {} } = await client.GET(
              "/users/me",
              {
                headers: { Authorization: `Bearer ${access_token}` },
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
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),

    Facebook,
  ],

  session: {
    maxAge: 12 * 60 * 60,
  },

  callbacks: {
    jwt({ token, user }) {
      return { ...user, ...token };
    },

    async session({ session, token: user }) {
      // this is the function which is responsible for sending the data in
      // useSession or @/auth
      // import { useSession } from "next-auth/react"; for client components
      // import { auth } from "@/auth";
      // const { token } = (await auth()) || {};

      const { token } = user || {};
      session.user = user as any; //TODO: To be change with the actual type
      session.token = token as string;
      return session;
    },
  },
});
