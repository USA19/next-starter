"use client";
import NextLink from "next/link";
import { FC, useMemo } from "react";

const NavLink: FC<any> = ({
  className,
  children,
  styles,
  borderRadius,
  ...props
}) => {
  const memoizedStyles = useMemo(
    () => ({
      borderRadius: borderRadius || 0,
      ...styles,
    }),
    [borderRadius, styles]
  );

  return (
    <NextLink className={`${className}`} style={memoizedStyles} {...props}>
      {children}
    </NextLink>
  );
};

export default NavLink;
