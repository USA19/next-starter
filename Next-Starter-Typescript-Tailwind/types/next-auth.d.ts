import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id?: string;
    firstName?: string;
    lastName?: string;
    status?: 0 | 1;
    emailVerified?: boolean | undefined;
    email?: string;
    token?: string | undefined;
    roles?: {
      id?: string;
      role?: "super-admin" | "admin" | "user";
      users?: unknown[][];
      createdAt?: string;
      updatedAt?: string;
    }[];
    createdAt?: string;
    updatedAt?: string;
  }

  interface Session {
    user: User;
    token: string;
  }
}
