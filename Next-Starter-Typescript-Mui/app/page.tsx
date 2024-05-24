"use client";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  const { user } = data || {};
  console.log(user, "auth>>>>>>>>>>>>>>>>>>>>>>>>");
  return (
    <div>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
