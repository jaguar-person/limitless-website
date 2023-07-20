import React from "react";
import Image from "next/image";

import Hero from "./hero";
import Servers from "./servers";
import Shop from "./shop";
import BackgroundImage from "../../images/background.svg";

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

const Dashboard: React.FC = () => {
  return (
    <div className="mb-72 md:mb-[180px]">
      <Image
        src={BackgroundImage}
        width={2134}
        height={1423}
        className="hidden md:block absolute left-0 -top-16  z-20"
        alt="background"
      />
      <div className="md:mt-[197px]">
        <Hero />
      </div>
      <div className="mt-14 md:mt-[337px]">
        <Servers servers={MOCK_SERVERS} />
      </div>
      <div className="mt-[88px] md:mt-[130px] md:px-[115px]">
        <Shop />
      </div>
    </div>
  );
};

export default Dashboard;
