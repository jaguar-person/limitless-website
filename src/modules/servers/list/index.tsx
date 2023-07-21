import React from "react";
import ServersDropDown from "../ServersDropdown";
import Line from "../../../components/line";
import ServerCard from "../../../components/card";
import Button from "../../../components/button";

import { useIsMobile } from "../../../utils/hooks/useIsMobile";
import { IServer } from "../../../utils/types";

interface IServersList {
  servers: IServer[];
}

const ServersList: React.FC<IServersList> = ({ servers }) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-2.5 ">
          {servers.map((item, i) => (
            <ServerCard server={item} key={i} />
          ))}
        </div>
        <Button
          name="explore servers"
          bgColor="bright"
          rightIcon="site"
          size="xl"
          width={isMobile ? "full" : "fit"}
        />
      </div>
    </div>
  );
};

export default ServersList;
