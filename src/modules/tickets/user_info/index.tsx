import React from "react";
import Image from "next/image";
import BgImage from "../../../images/ticket-bg.png";
import Avatar from "../../../images/avatar--rounded.png";
import TicketsUserID from "./TicketsUserID";

const TicketsUserInfo: React.FC = () => (
  <div className="relative flex justify-between items-center px-10 py-5 bg-gradient-to-b from-secondary-background to-secondary-background/70 border-secondary-background-accent rounded-md z-10">
    <div className="absolute top-0 left-0 bg-blend-overlay z-0">
      <Image src={BgImage} width={1265} height={842} alt="bg" />
    </div>
    <div className="flex items-center gap-7">
      <Image
        src={Avatar}
        width={160}
        height={160}
        alt="avatar"
        className="rounded-full"
      />
      <div className="flex flex-col gap-2.5">
        <div>
          <p className="text-white font-bold text-2xl">Catalin</p>
          <p className="text-secondary">
            <span className="text-white">First seen:</span> 14 days ago on
            01/25/2023
          </p>
        </div>
        <div className="flex gap-1">
          <TicketsUserID name="Steam ID" id="76561198191626285" />
          <TicketsUserID name="Rusticated ID" id="63d15a2ff0fa9d001a995b28" />
        </div>
      </div>
    </div>
    <button className="btn-custom-initial text-black/75 font-bold bg-danger rounded-md z-10">
      Log Out
    </button>
  </div>
);

export default TicketsUserInfo;
