import React from "react";

interface INavItem {
  children: React.ReactNode;
}

const NavItem = ({ children }: INavItem) => (
  <div className="cursor-pointer text-secondary text-lg">{children}</div>
);

export default NavItem;
