"use client";
import NextLink from "next/link";
import { useMemo } from "react";

function NavLink({ className, children, styles, borderRadius, ...props }) {
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
}

export default NavLink;
