"use client";
import { FC } from "react";

import { SessionProvider } from "next-auth/react";
import { ChildrenProps } from "./layout";

const Providers: FC<ChildrenProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
