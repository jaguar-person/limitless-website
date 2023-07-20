import React from "react";
import SearchBar from "../../../../components/search-bar";
import { TicketStatus } from "../../../../utils/enums";
import DropDown from "../../../../components/dropdown";

interface ITicket {
  type: TicketStatus;
}

export const Ticket: React.FC<ITicket> = ({ type }) => (
  <div className="flex gap-2.5 items-center md:px-2.5 py-1 md:py-5">
    <div
      className={`w-3 h-3 rounded-full ${
        type === TicketStatus.OPENED
          ? "bg-gems"
          : type === TicketStatus.CLOSED
          ? "bg-danger"
          : "bg-points"
      }`}
    />
    <p className="text-secondary text-base md:text-lg">{type}</p>
  </div>
);

const MyTicketsSearch: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-center md:px-5 rounded-md md:bg-secondary-background md:border border-secondary-background-accent">
      <div className="hidden md:flex gap-2.5 items-center">
        <div className="text-white text-lg px-2.5 py-5">All tickets</div>
        <Ticket type={TicketStatus.OPENED} />
        <Ticket type={TicketStatus.CLOSED} />
        <Ticket type={TicketStatus.AWAITING} />
      </div>
      <div className="w-full md:w-1/3">
        <SearchBar icon="search_2" placeholder="Search a ticket..." />
      </div>
      <div className="md:hidden block w-full">
        <DropDown width="full" title={<Ticket type={TicketStatus.OPENED} />}>
          <div className="bg-secondary-background-accent flex flex-col gap-1 pl-5 mt-1 rounded-md">
            <Ticket type={TicketStatus.OPENED} />
            <Ticket type={TicketStatus.CLOSED} />
            <Ticket type={TicketStatus.AWAITING} />
          </div>
        </DropDown>
      </div>
    </div>
  );
};

export default MyTicketsSearch;
