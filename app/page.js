"use client";
// import { authOptions } from "./api/auth/[...nextauth]/route";
import "./globals.css";
// import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  console.log("before: ", signOut);

  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
