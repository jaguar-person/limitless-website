import React from "react";
import ServerCard from "../../components/card";
import ServerSwitch from "./switch";
import ServersDropDown from "./ServersDropdown";
import Button from "../../components/button";
import Decoration from "../../components/decoration";
import Line from "../../components/line";

const Server = () => (
  <div className="text-white mt-14 md:mt-40 mb-56 md:mb-24 flex flex-col gap-2 md:gap-16 items-center">
    <div className="flex flex-col md:gap-5">
      <div className="flex flex-col gap-4 md:gap-2.5 items-center py-3">
        <Decoration color="gems" />
        <div className="flex flex-col gap-2 text-center">
          <p className="text-white font-bold text-[45px] leading-10 tracking-tighter">
            Limitless Servers
          </p>
          <p className="text-base text-secondary">
            There are currently{" "}
            <span className="font-bold text-gems">2211</span> players across all
            our servers.
          </p>
        </div>
      </div>
      <ServerSwitch />
    </div>
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
      <div className="flex flex-col gap-4 pt-4 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2.5 ">
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
          <ServerCard />
        </div>
        <Button
          name="explore servers"
          bgColor="info-light"
          className="py-5 w-full mt-2 bg-info-light"
          rightIcon="site"
          size="xl"
        />
      </div>
    </div>
  </div>
);

export default Server;
