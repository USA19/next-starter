import { client } from "@/api-client";

async function blog() {
  const { data: { users = [] } = {} } = await client.GET("/users", {
    params: {
      query: {
        limit: 10,
        page: 1,
      },
    },
  });

  console.log(users, "users>>>>>>>>>>>>>>>>>>>");
  return <div>blog</div>;
}

export default blog;
