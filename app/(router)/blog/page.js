"use client";
import { useSession } from "next-auth/react";

function blog() {
  const data = useSession();

  console.log(data, "useSession>>>>>>>>>>>>>>>");

  return <div>blog</div>;
}

export default blog;
