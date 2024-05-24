import { getServerSession } from "next-auth/next";
import createClient, { Middleware } from "openapi-fetch";
import type { paths } from "./generated";
import { authOptions } from "./app/api/auth/[...nextauth]/route";

const myMiddleware: Middleware = {
  async onRequest(req, _options) {
    const { token } = (await getServerSession(authOptions)) || {};

    req.headers.set("Authorization", `Bearer ${token}`);
    return req;
  },

  async onResponse(res, _options) {
    const { body, ...resOptions } = res;
    // global error handling
    // const responseBody = await res.text();
    // const errorResponse = JSON.parse(responseBody);
    // console.log(errorResponse, "errorResponse>>>>>>>>>>>>>>>>>>>>>>");
    // const { message } = errorResponse || {}; //backend error
    // alert(message);
    return new Response(body, { ...resOptions, status: 200 });
  },
};

export const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
});

client.use(myMiddleware);
