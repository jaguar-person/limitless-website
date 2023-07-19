import React from "react";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";
import ServerCard from "../../../components/card";
import Decoration from "../../../components/decoration";
import Button from "../../../components/button";

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
];

const Servers = () => {
  const isMobile = useIsMobile();
  return (
    <div className="text-center flex flex-col items-center gap-2 md:gap-9">
      <div className=" flex flex-col gap-2 py-3">
        <div className="flex flex-col gap-4 items-center">
          <Decoration color="gems" />
          <p className="font-bold text-5xl tracking-tighter text-white">
            Our Servers
          </p>
        </div>
        <div className="md:text-[20px] text-base text-center md:leading-[30px] text-secondary">
          <span>
            Discover Our Extensive Collection of High-Quality Rust Servers -
          </span>
          <span className="md:block inline">
            Connect Instantly with a Simple Click!
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-4 md:gap-2.5">
        {MOCK_SERVERS.map((item, i) => (
          <ServerCard server={item} key={i} />
        ))}
      </div>
      <Button
        name="explore servers"
        bgColor="info-light"
        className="py-5 mt-2 bg-info-light"
        rightIcon="site"
        size="xl"
        width={isMobile ? "full" : "fit"}
      />
    </div>
  );
};

export default Servers;
