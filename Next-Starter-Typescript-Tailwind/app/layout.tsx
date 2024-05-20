import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import { FC, ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Auth Setup",
  description: "Demo Authentication Setup",
};

const RootLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
};

export default RootLayout;
