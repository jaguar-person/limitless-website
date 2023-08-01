import React from "react";
import Image from "next/image";
import BgImage from "../../../images/ticket-bg.png";
import MobileBgImage from "../../../images/mobile-ticket-bg.png";
import Avatar from "../../../images/avatar--rounded.png";
import TicketsUserID from "./TicketsUserID";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";
import { TicketsLogOutModal } from "../modals";

const TicketsUserInfo: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div>
      <div className="relative flex justify-between items-center md:px-10 md:py-5 border-secondary-background-accent rounded-md mb-2.5 md:mb-0">
        <div className="md:w-full absolute -top-20 -left-4 -right-4 md:top-0 md:left-0 bg-blend-overlay z-0">
          <Image
            src={isMobile ? MobileBgImage : BgImage}
            width={1265}
            height={842}
            alt="bg"
            className="w-full h-60 md:h-48 bg-gradient-to-r from-secondary-background to-[#24222C] z-0"
          />
        </div>
        <div className="md:flex md:items-center md:gap-7 z-10">
          <Image
            src={Avatar}
            width={isMobile ? 48 : 160}
            height={isMobile ? 48 : 160}
            alt="avatar"
            className="rounded-full"
          />
          <div className="md:flex flex-col gap-2.5 hidden">
            <div>
              <p className="text-white font-bold text-2xl">Catalin</p>
            </div>
            <div className="flex md:flex-col xl:flex-row gap-1">
              <TicketsUserID name="Steam ID" id="76561198191626285" />
              <TicketsUserID
                name="Rusticated ID"
                id="63d15a2ff0fa9d001a995b28"
              />
            </div>
          </div>
        </div>
        <TicketsLogOutModal />
      </div>
      <div className="flex flex-col gap-2 md:hidden relative">
        <p className="text-white text-2xl">TripleZone</p>
        <div className="flex">
          <div className="flex-1 w-1/2">
            <TicketsUserID name="Steam ID" id="76561198191626285" />
          </div>
          <div className="flex-1 w-1/2">
            <TicketsUserID name="Rusticated ID" id="63d15a2ff0fa9d001a995b28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsUserInfo;
