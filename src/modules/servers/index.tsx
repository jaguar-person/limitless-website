import React from "react";
import ServerSwitch from "./switch";
import Decoration from "../../components/decoration";
import ServersList from "./list";

const Server: React.FC = () => {
  return (
    <div className="mt-12 md:mt-[147px] mb-80 md:mb-24 flex flex-col gap-2 md:gap-16 items-center">
      <div className="flex flex-col md:gap-5">
        <div className="flex flex-col gap-4 md:gap-2.5 items-center py-3">
          <Decoration color="gems" />
          <div className="flex flex-col gap-2 text-center">
            <p className="text-white font-bold text-[45px] leading-10 tracking-tighter">
              Limitless Servers
            </p>
            <p className="text-base text-secondary">
              There are currently{" "}
              <span className="font-bold text-gems">2211</span> players across
              all our servers.
            </p>
          </div>
        </div>
        <ServerSwitch />
      </div>
      <ServersList />
    </div>
  );
};

export default Server;
