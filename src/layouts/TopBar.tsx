import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LogoIcon from "../images/logo.svg";
import NavItem from "../components/nav-item";
import User from "../components/user";
import Menu from "../components/menu";

const TopBar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center relative z-30">
      <Image
        src={LogoIcon}
        alt="My image"
        width={64}
        height={64}
        className="hidden md:block"
        onClick={() => {
          router.push("/");
        }}
      />
      <Image
        src={LogoIcon}
        alt="My image"
        width={32}
        height={32}
        className="block md:hidden"
        onClick={() => {
          router.push("/");
        }}
      />
      <div className="hidden md:flex gap-10 text-lg text-secondary">
        <NavItem>Leaderboard</NavItem>
        <NavItem>Support</NavItem>
        <NavItem>Shop</NavItem>
        <NavItem>My Tickets</NavItem>
        <NavItem>Servers</NavItem>
      </div>
      <div className="hidden md:block">
        <User />
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
