"use client";
import { client } from "@/mock-api";
import "./globals.css";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const fetchAllUsers = async () => {
    const { data: { users = [] } = {} } = await client.GET("/users", {
      params: {
        query: {
          limit: 10,
          page: 1,
        },
      },
    });

    console.log(users, ">>>>>>>>>>>>>");
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

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
