"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalize(path) {
  const value = (path || "/").split("#")[0].split("?")[0];
  if (value.length > 1 && value.endsWith("/")) {
    return value.slice(0, -1);
  }
  return value || "/";
}

export const NavLink = ({
  href,
  className = "",
  activeClassName = "",
  children,
}) => {
  const pathname = usePathname();
  const isActive = normalize(pathname) === normalize(href);

  return (
    <Link
      href={href}
      className={isActive ? `${className} ${activeClassName}`.trim() : className}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};
