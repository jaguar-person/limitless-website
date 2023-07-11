import React from "react";
import ServerCard from "../../components/server-card";
import ServerSwitch from "./switch";
import DropDown from "../../components/dropdown";

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
      <ServerSwitch />
    </div>
    <div className="flex flex-col gap-2.5">
      <div className="flex justify-between">
        <p className="text-white font-bold text-3xl">Listed Servers</p>
        <DropDown />
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
