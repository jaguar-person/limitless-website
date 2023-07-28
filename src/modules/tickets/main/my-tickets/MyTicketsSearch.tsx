import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "../../../../components/search-bar";
import { TicketStatus } from "../../../../utils/enums";
import ArrowDown from "../../../../images/arrow-down.svg";

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

const TicketsSelect: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState(TicketStatus.OPENED);
  const [isShow, setShow] = useState(false);

  const handleCurrentStatus = (status: TicketStatus) => () => {
    setCurrentStatus(status);
    setShow(false);
  };
  return (
    <div className="relative flex flex-col gap-2">
      <div
        className="bg-secondary-background border border-secondary-background-accent rounded-md py-2 px-5 flex justify-between items-center"
        onClick={() => {
          setShow(!isShow);
        }}
      >
        <Ticket type={currentStatus} />
        <Image src={ArrowDown} width={14} height={14} alt="down" />
      </div>
      {isShow && (
        <ul className="absolute -bottom-[120px] p-2 bg-secondary-background rounded-md w-full z-10">
          <li onClick={handleCurrentStatus(TicketStatus.OPENED)}>
            <Ticket type={TicketStatus.OPENED} />
          </li>
          <li onClick={handleCurrentStatus(TicketStatus.CLOSED)}>
            <Ticket type={TicketStatus.CLOSED} />
          </li>
          <li onClick={handleCurrentStatus(TicketStatus.AWAITING)}>
            <Ticket type={TicketStatus.AWAITING} />
          </li>
        </ul>
      )}
    </div>
  );
};

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
        <TicketsSelect />
      </div>
    </div>
  );
};

export default MyTicketsSearch;
