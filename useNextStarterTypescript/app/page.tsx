"use client";
import "./globals.css";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import useAxiosAuth from "@/lib/hooks/useClientAuth";

export default function Home() {
  const client = useAxiosAuth();
  const fetchAllUsers = async () => {
    try {
      const { data: { users = [] } = {} } = await client.GET("/users", {
        cache: "no-cache",
        params: {
          query: {
            limit: 10,
            page: 1,
          },
        },
      });
      console.log(users, "users?>??????????????????");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (client) fetchAllUsers();
  }, [client]);

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
