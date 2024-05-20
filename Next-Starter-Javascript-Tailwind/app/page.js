import { signOut } from "next-auth/react";

export default function Home() {
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
