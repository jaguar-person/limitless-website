import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import TitleArrow from "../../../../components/title-arrow";
import TicketStatusBadge from "../../shared/TicketStatus";
import Button from "../../../../components/button";
import { TicketStatus } from "../../../../utils/enums";
import TicketDetailsInfo from "./TicketDetailsInfo";
import MobileBgImage from "../../../../images/mobile-ticket-bg.png";
import { TicketsCloseTicketModal } from "../../modals";
import Modal from "../../../../components/modal";
import { ROUTING_PATH } from "../../../../utils/constants";
interface ITicketsDetailHeader {
  ticket: {
    status: TicketStatus;
    id: string;
    server: string;
    createdAt: string;
    updatedAt: string;
  };
}

const TicketsDetailHeader: React.FC<ITicketsDetailHeader> = ({ ticket }) => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col gap-3.5 pb-4 md:pb-0">
      <div className="min-w-[480px] absolute -top-20 -left-4 bg-blend-overlay z-0">
        <Image
          src={MobileBgImage}
          width={360}
          height={196}
          alt="bg"
          className="w-full h-48 md:hidden bg-gradient-to-r from-secondary-background to-[#24222C] z-0"
        />
      </div>
      <div className="flex justify-between ">
        <div className="hidden md:flex gap-5 items-center">
          <TitleArrow
            title="Cheater"
            size="lg"
            onClick={() => {
              router.push(ROUTING_PATH.TICKETS);
            }}
          />
          <TicketStatusBadge status={ticket.status} />
        </div>
        <div className="z-10 flex flex-col gap-1 md:hidden items-center">
          <p className="text-points text-2xl">{ticket.id}</p>
          <p className="text-white text-xs font-medium">{ticket.server}</p>
        </div>
        <TicketsCloseTicketModal />
      </div>
      <div className="flex md:hidden justify-between text-xs text-secondary z-10 md:z-0">
        <div className="w-1/2">
          <p className="uppercase leading-5 font-bold">CREATED</p>
          <p>{ticket.createdAt}</p>
        </div>
        <div className="w-1/2">
          <p className="uppercase leading-5 font-bold">Last Updated</p>
          <p>{ticket.updatedAt}</p>
        </div>
      </div>
      <div className="p-5 hidden md:flex justify-between card-container">
        <p className="text-white font-bold text-lg">Ticket Details</p>
        <div className="flex md:w-2/3 xl:w-1/2 divide-x divide-secondary-background-accent">
          <div className="flex flex-col gap-0.5 flex-1">
            <TicketDetailsInfo name="Ticket ID" value="#45858" />
            <TicketDetailsInfo name="Server" value="LR-EU 2x SOLO" />
          </div>
          <div className="flex flex-col gap-0.5 flex-1 ml-5 pl-5">
            <TicketDetailsInfo name="Created" value="Oct 11 at 13:12 AM" />
            <TicketDetailsInfo name="Last Updated" value="Oct 13 at 10:38 AM" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsDetailHeader;
