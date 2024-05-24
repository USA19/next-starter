"use client";
import { FC } from "react";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@mui/material";
import createCache from "@emotion/cache";
//others block
import { ChildrenProps } from "./layout";
import customTheme from "@/theme";

const Providers: FC<ChildrenProps> = ({ children }) => {
  const muiCache = createCache({ key: "css" });
  return (
    <SessionProvider>
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
