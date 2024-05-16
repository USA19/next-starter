"use client";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SessionProvider } from "next-auth/react";
import { ChildrenProps } from "./layout";

const queryClient = new QueryClient();
const Providers: FC<ChildrenProps> = ({ children }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
