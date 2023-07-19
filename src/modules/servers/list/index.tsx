import React from "react";
import ServersDropDown from "../ServersDropdown";
import Line from "../../../components/line";
import ServerCard from "../../../components/card";
import Button from "../../../components/button";

import { useIsMobile } from "../../../utils/hooks/useIsMobile";

const MOCK_SERVERS = [
  {
    lastDate: "3 months ago",
    count: 2,
    name: "VANILA EU MAIN",
    description:
      "Join the Rust revolution! Our high-performance gaming server offers a thrilling, fair, and lag-free experience. With an active community and moderated environment become the ultimate survivor in this intense world. Start building and thriving, join now!",
    player_alive: 38,
    player_total: 256,
  },
  {
    lastDate: "3 months ago",
    count: 2,
    name: "VANILA EU MAIN",
    description:
      "Join the Rust revolution! Our high-performance gaming server offers a thrilling, fair, and lag-free experience. With an active community and moderated environment become the ultimate survivor in this intense world. Start building and thriving, join now!",
    player_alive: 38,
    player_total: 256,
  },
  {
    lastDate: "3 months ago",
    count: 2,
    name: "VANILA EU MAIN",
    description:
      "Join the Rust revolution! Our high-performance gaming server offers a thrilling, fair, and lag-free experience. With an active community and moderated environment become the ultimate survivor in this intense world. Start building and thriving, join now!",
    player_alive: 38,
    player_total: 256,
  },
  {
    lastDate: "3 months ago",
    count: 2,
    name: "VANILA EU MAIN",
    description:
      "Join the Rust revolution! Our high-performance gaming server offers a thrilling, fair, and lag-free experience. With an active community and moderated environment become the ultimate survivor in this intense world. Start building and thriving, join now!",
    player_alive: 38,
    player_total: 256,
  },
  {
    lastDate: "3 months ago",
    count: 2,
    name: "VANILA EU MAIN",
    description:
      "Join the Rust revolution! Our high-performance gaming server offers a thrilling, fair, and lag-free experience. With an active community and moderated environment become the ultimate survivor in this intense world. Start building and thriving, join now!",
    player_alive: 38,
    player_total: 256,
  },
  {
    lastDate: "3 months ago",
    count: 2,
    name: "VANILA EU MAIN",
    description:
      "Join the Rust revolution! Our high-performance gaming server offers a thrilling, fair, and lag-free experience. With an active community and moderated environment become the ultimate survivor in this intense world. Start building and thriving, join now!",
    player_alive: 38,
    player_total: 256,
  },
];

const ServersList: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col gap-2 md:gap-2.5">
      <div className="flex justify-between pb-2 md:pb-0 w-full">
        <p className="text-white font-bold text-3xl hidden md:block">
          Listed Servers
        </p>
        <ServersDropDown />
      </div>
      <div className="w-full block md:hidden">
        <Line />
      </div>
      <div className="flex flex-col gap-4 pt-4 md:pt-0 items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2.5 ">
          {MOCK_SERVERS.map((item, i) => (
            <ServerCard server={item} key={i} />
          ))}
        </div>
        <Button
          name="explore servers"
          bgColor="info-light"
          className="py-5 mt-2"
          rightIcon="site"
          size="xl"
          width={isMobile ? "full" : "fit"}
        />
      </div>
    </div>
  );
};

export default ServersList;
