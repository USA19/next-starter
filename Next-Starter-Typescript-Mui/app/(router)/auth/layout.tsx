import { ChildrenProps } from "@/app/layout";
import { FC } from "react";

const Layout: FC<ChildrenProps> = (props) => {
  const { children } = props;

  return <div>{children}</div>;
};

export default Layout;
