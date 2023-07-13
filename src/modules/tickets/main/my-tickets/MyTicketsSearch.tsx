import React from "react";
import SearchBar from "../../../../components/search-bar";
import { TicketType } from "../../../../utils/enums";

interface ITicket {
  type: TicketType;
}

export const Ticket: React.FC<ITicket> = ({ type }) => (
  <div className="flex gap-2.5 items-center px-2.5 py-5">
    <div
      className={`w-3 h-3 rounded-full ${
        type === TicketType.OPENED
          ? "bg-gems"
          : type === TicketType.CLOSED
          ? "bg-danger"
          : "bg-points"
      }`}
    />
    <p className="text-secondary text-lg">{type}</p>
  </div>
);

const MyTicketsSearch = () => {
  return (
    <div className="flex justify-between items-center px-5 rounded-md bg-secondary-background border border-secondary-background-accent">
      <div className="flex gap-2.5 items-center">
        <div className="text-white text-lg px-2.5 py-5">All tickets</div>
        <Ticket type={TicketType.OPENED} />
        <Ticket type={TicketType.CLOSED} />
        <Ticket type={TicketType.AWAITING} />
      </div>
      <div className="w-1/3">
        <SearchBar icon="search_2" placeholder="Search a ticket..." />
      </div>
    </div>
  );
};

export default MyTicketsSearch;
