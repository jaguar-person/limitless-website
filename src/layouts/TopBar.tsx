import React from "react";
import Image from "next/image";
import LogoIcon from "../images/logo.svg";
import NavItem from "../components/nav-item";
import User from "../components/user";

const TopBar = () => {
  return (
    <div className="absolute w-full top-[88px] left-0 px-[100px]">
      <div className="flex justify-between items-center">
        <Image src={LogoIcon} width={64} height={64} alt="Logo" />
        <div className="flex gap-10 text-lg text-secondary">
          <NavItem>Leaderboard</NavItem>
          <NavItem>Support</NavItem>
          <NavItem>Shop</NavItem>
          <NavItem>My Tickets</NavItem>
          <NavItem>Servers</NavItem>
        </div>
        <User />
      </div>
    </div>
  );
};

export default TopBar;
