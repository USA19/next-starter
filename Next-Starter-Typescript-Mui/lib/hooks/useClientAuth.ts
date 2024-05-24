"use client";
import { useEffect } from "react";
import createClient, { Middleware } from "openapi-fetch";
import { useSession } from "next-auth/react";
import { paths } from "@/generated";

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
});

const useClientAuth = () => {
  const { data: session } = useSession();
  const { token } = session || {};

  useEffect(() => {
    const middleware: Middleware = {
      async onRequest(req, _options) {
        req.headers.set("Authorization", `Bearer ${token}`);
        return req;
      },

      async onResponse(res, options) {
        const { body, ...resOptions } = res;
        // const responseBody = await res.text();
        // const errorResponse = JSON.parse(responseBody);
        // const { message } = errorResponse || {}; //backend error
        // alert(message);
        return new Response(body, { ...resOptions, status: 200 });
      },
    };

    client.use(middleware);

    return () => {
      client.eject(middleware);
    };
  });

  return client;
};

export default useClientAuth;
