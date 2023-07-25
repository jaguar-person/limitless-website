import React from "react";
import MyTicketsSearch from "./MyTicketsSearch";
import MyTicketsTable from "./MyTicketsTable";
import { TicketStatus } from "../../../../utils/enums";
import Pagination from "../../../../components/pagination";
import { useRouter } from "next/router";
import Button from "../../../../components/button";
import { useIsMobile } from "../../../../utils/hooks/useIsMobile";
import { ROUTING_PATH } from "../../../../utils/constants";

const MOCK_TICKETS = [
  {
    id: "#45858",
    status: TicketStatus.OPENED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    status: TicketStatus.CLOSED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    status: TicketStatus.AWAITING,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    status: TicketStatus.OPENED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    status: TicketStatus.OPENED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    status: TicketStatus.OPENED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
];

const TicketsMyTickets: React.FC = () => {
  const router = useRouter();
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row justify-between">
        <p className="hidden md:block text-white font-bold text-[28px] leading-10">
          My Tickets
        </p>
        <div
          onClick={() => {
            router.push(ROUTING_PATH.TICKETS_ADD);
          }}
        >
          <Button
            name="New Ticket"
            bgColor="gems"
            rightIcon="add"
            width={isMobile ? "full" : "fit"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <MyTicketsSearch />
        <MyTicketsTable tickets={MOCK_TICKETS} />
        <div className="text-center">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default TicketsMyTickets;
