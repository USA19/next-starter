import { FC, ReactNode } from "react";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Providers from "./Providers";

export interface ChildrenProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fantacy App",
  description: "",
};

const RootLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <Providers>
          <body className={inter.className}>{children}</body>
        </Providers>
      </AppRouterCacheProvider>
    </html>
  );
};

export default RootLayout;
