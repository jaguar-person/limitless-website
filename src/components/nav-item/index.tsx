import React from "react";
import { useRouter } from "next/router";

interface INavItem {
  children: React.ReactNode;
  path?: string;
  isCurrentPath?: boolean;
}

const NavItem: React.FC<INavItem> = ({ children, path, isCurrentPath }) => {
  const router = useRouter();
  return (
    <div
      className={
        "cursor-pointer md:text-lg text-3xl md:font-normal " +
        (isCurrentPath ? "text-gems font-bold" : "text-secondary font-medium ")
      }
      onClick={() => {
        router.push(`/${path}`);
      }}
    >
      {children}
    </div>
  );
};

export default NavItem;
