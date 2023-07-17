import React from "react";
import Image from "next/image";
import LinkIcon from "../../images/link_2.svg";
import UsersIcon from "../../images/users.svg";
import ServerIcon from "../../images/server.svg";

const ServerCard = () => (
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
          <p className="text-secondary text-[13px]">Last wipe • 3 months ago</p>
          <p className="font-bold leading-9 text-2xl text-white">
            2x VANILA EU MAIN
          </p>
        </div>
        <div className="line-clamp-3 text-secondary text-left text-base">
          Join the Rust revolution! Our high-performance gaming server offers a
          thrilling, fair, and lag-free experience. With an active community and
          moderated environment become the ultimate survivor in this intense
          world. Start building and thriving, join now!
        </div>
      </div>
    </div>
    <div className="p-4 md:py-3.5 md:px-6 flex justify-between bg-gradient-to-r from-secondary-background-accent via-[#25232A] to-[#2F2E38] rounded-b-lg border-t-white border-opacity-[7]">
      <div className="flex flex-col items-start gap-1">
        <p className="text-secondary font-bold">ONLINE PLAYERS</p>
        <div className="flex gap-2">
          <Image src={UsersIcon} width={31} height={19} alt="users" />
          <p className="text-[20px] leading-[24px] text-white">38/256</p>
        </div>
      </div>
      <div className="flex gap-2.5 py-4 px-7 md:px-8 bg-gems font-bold rounded-md">
        <p className="font-bold text-background">Copy IP</p>
        <Image src={LinkIcon} width={24} height={24} alt="link" />
      </div>
    </div>
  </div>
);

export default ServerCard;
