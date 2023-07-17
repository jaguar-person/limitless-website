import React from "react";
import { useRouter } from "next/router";
import TitleArrow from "../../../../components/title-arrow";
import TicketStatusBadge from "../../shared/TicketStatus";
import Button from "../../../../components/button";
import { TicketStatus } from "../../../../utils/enums";
import TicketDetailsInfo from "./TicketDetailsInfo";

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
    <div className="flex flex-col gap-3.5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <TitleArrow
            title="Cheater"
            size="lg"
            onClick={() => {
              router.push("/tickets");
            }}
          />
          <TicketStatusBadge status={ticket.status} />
        </div>
        <Button name="Close Ticket" bgColor="danger" />
      </div>
      <div className="p-5 flex justify-between card-container">
        <p className="text-white font-bold text-lg">Ticket Details</p>
        <div className="flex w-1/2 divide-x divide-secondary-background-accent">
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
