import React from "react";
import Image from "next/image";
import AddIcon from "../../../../images/add.svg";
import MyTicketsSearch from "./MyTicketsSearch";
import MyTicketsTable from "./MyTicketsTable";
import { TicketType } from "../../../../utils/enums";
import Pagination from "../../../../components/pagination";
import { useRouter } from "next/router";

const MOCK_TICKETS = [
  {
    id: "#45858",
    type: TicketType.OPENED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    type: TicketType.CLOSED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    type: TicketType.AWAITING,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    type: TicketType.OPENED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    type: TicketType.OPENED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
  {
    id: "#45858",
    type: TicketType.OPENED,
    title: "Example title",
    description: "Don't delete this ticket, is for UI of the new website.",
    createdAt: "6 days ago",
    updatedAt: "6 days ago",
  },
];

const TicketsMyTickets = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="text-white font-bold text-[28px] leading-10">
          My Tickets
        </p>
        <button className="btn-custom flex gap-2 items-center bg-gems rounded-md">
          <div
            className="text-black/75 text-base font-bold"
            onClick={() => {
              router.push("./tickets/add");
            }}
          >
            New Ticket
          </div>
          <Image src={AddIcon} width={20} height={20} alt="add" />
        </button>
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
