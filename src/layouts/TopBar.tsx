import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LogoIcon from "../images/logo.svg";
import NavItem from "../components/nav-item";
import User from "../components/user";
import Menu from "../components/menu";
import { ROUTING_PATH } from "../utils/constants";

const TopBar = () => {
  const router = useRouter();
  const currentPathName = router.pathname.split("/")[1];

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
        <NavItem
          path={ROUTING_PATH.LEADERBOARD}
          isCurrentPath={currentPathName === ROUTING_PATH.LEADERBOARD}
        >
          Leaderboard
        </NavItem>
        <NavItem
          path={ROUTING_PATH.LEADERBOARD}
          isCurrentPath={currentPathName === ROUTING_PATH.LEADERBOARD}
        >
          Support
        </NavItem>
        <NavItem
          path={ROUTING_PATH.LEADERBOARD}
          isCurrentPath={currentPathName === ROUTING_PATH.LEADERBOARD}
        >
          Shop
        </NavItem>
        <NavItem
          path={ROUTING_PATH.TICKETS}
          isCurrentPath={currentPathName === ROUTING_PATH.TICKETS}
        >
          My Tickets
        </NavItem>
        <NavItem
          path={ROUTING_PATH.SERVERS}
          isCurrentPath={currentPathName === ROUTING_PATH.SERVERS}
        >
          Servers
        </NavItem>
      </div>
      <div className="hidden md:block">
        <User />
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
