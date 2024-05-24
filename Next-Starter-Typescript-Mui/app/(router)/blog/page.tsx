import { auth } from "@/auth";

async function page() {
  const { user } = (await auth()) || {};
  console.log(user, ">>>>>>>>>>>>blog>>>>>>>>>");
  return <div>blog page</div>;
}

export default page;
