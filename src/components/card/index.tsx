import React from "react";
import Image from "next/image";
import UsersIcon from "../../images/users.svg";
import ServerIcon from "../../images/server.svg";

import { IServer } from "../../utils/types";
import Button from "../button";

interface IServerCard {
  server: IServer;
}

const ServerCard: React.FC<IServerCard> = ({ server }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5 p-4 md:p-5 pb-2.5 bg-gradient-to-b from-secondary-background to-background border border-secondary-background-accent  rounded-t-lg">
        <Image
          src={ServerIcon}
          width={366}
          height={152}
          className="rounded-lg "
          alt="server"
        />
        <div className="flex flex-col gap-1 text-left">
          <div>
            <p className="text-secondary text-[13px]">
              Last wipe • {server.lastDate}
            </p>
            <p className="font-bold leading-9 text-2xl text-white">
              {server.count}x {server.name}
            </p>
          </div>
          <div className="line-clamp-3 text-secondary text-left text-base">
            {server.description}
          </div>
        </div>
      </div>
      <div className="p-4 md:py-3.5 md:px-6 flex justify-between bg-gradient-to-r from-secondary-background-accent via-[#25232A] to-[#2F2E38] rounded-b-lg border-t-white border-opacity-[7]">
        <div className="flex flex-col items-start gap-1">
          <p className="text-secondary font-bold">ONLINE PLAYERS</p>
          <div className="flex gap-2">
            <Image src={UsersIcon} width={31} height={19} alt="users" />
            <p className="text-[20px] leading-[24px] text-white">
              {server.player_alive}/{server.player_total}
            </p>
          </div>
        </div>
        <Button name="Copy IP" rightIcon="link_2" bgColor="gems" />
      </div>
    </div>
  );
};

export default ServerCard;
