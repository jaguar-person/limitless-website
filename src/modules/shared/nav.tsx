import React from "react";
import NavItem from "../../components/nav-item";
import { ROUTING_PATH } from "../../utils/constants";

interface INav {
  currentPathName: string;
}

const Nav: React.FC<INav> = ({ currentPathName }) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-10 md:text-lg text-secondary1">
    <NavItem
      path={ROUTING_PATH.LEADERBOARD}
      isCurrentPath={currentPathName === ROUTING_PATH.LEADERBOARD}
    >
      Leaderboard
    </NavItem>
    <NavItem
      path={ROUTING_PATH.SUPPORT}
      isCurrentPath={currentPathName === ROUTING_PATH.SUPPORT}
    >
      Support
    </NavItem>
    <a
      href="https://store.limitlessrust.com/category/all-packages"
      target="_blank"
      className="cursor-pointer md:text-lg text-3xl md:font-normal text-secondary"
    >
      Shop
    </a>
    <NavItem
      path={ROUTING_PATH.TICKETS}
      isCurrentPath={currentPathName === ROUTING_PATH.TICKETS}
    >
      My Tickets
    </NavItem>
    <NavItem
      path={ROUTING_PATH.ACCOUNTS}
      isCurrentPath={currentPathName === ROUTING_PATH.ACCOUNTS}
    >
      Link
    </NavItem>
    <NavItem
      path={ROUTING_PATH.SERVERS}
      isCurrentPath={currentPathName === ROUTING_PATH.SERVERS}
    >
      Servers
    </NavItem>
  </div>
);

export default Nav;
