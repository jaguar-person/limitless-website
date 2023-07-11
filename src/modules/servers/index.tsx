import React from "react";
import Image from "next/image";
import EURFlag from "../../images/flag-eur.svg";
import USAFlag from "../../images/flag-usa.svg";
import ArrowDown from "../../images/arrow-down.svg";
import ServerCard from "../../components/server-card";

const ServerContainer = () => (
  <div className="text-white mt-40 mb-16 flex flex-col gap-16 items-center">
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5 items-center">
        <p className="text-white font-bold text-[45px] leading-10">
          Limitless Servers
        </p>
        <p className="text-base text-secondary">
          There are currently <span className="font-bold text-gems">2211</span>{" "}
          players across all our servers.
        </p>
      </div>
      <div className="flex gap-2.5">
        <div className="py-3.5 px-8 bg-[#0052B4]/50 border-[#0052B4] rounded-md flex gap-5 items-center">
          <Image src={EURFlag} width={35} height={35} alt="eurFlag" />
          <p className="font-semibold text-base text-white">Europe Servers</p>
        </div>
        <div className="py-3.5 px-8 bg-secondary-background border-secondary-background-accent rounded-md flex gap-5 items-center">
          <Image src={USAFlag} width={35} height={35} alt="eurFlag" />
          <p className="font-semibold text-base text-secondary">
            America Servers
          </p>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-2.5">
      <div className="flex justify-between">
        <p className="text-white font-bold text-3xl">Listed Servers</p>
        <div className="bg-secondary-background border-secondary-background-accent rounded-md py-3 px-5 flex gap-2.5 items-center">
          <p className="text-secondary font-semibold text-base">Game Modes</p>
          <Image src={ArrowDown} width={12} height={8} alt="arrowDown" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        <ServerCard />
        <ServerCard />
        <ServerCard />
        <ServerCard />
        <ServerCard />
        <ServerCard />
      </div>
    </div>
  </div>
);

export default ServerContainer;
