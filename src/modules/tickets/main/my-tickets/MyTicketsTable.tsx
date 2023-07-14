import React from "react";
import { useRouter } from "next/router";

import { TicketTableType } from "../../../../utils/types";
import TicketStatusBadge from "../../shared/TicketStatus";

interface IMyTicketsTableRow {
  data: TicketTableType;
  isEven: boolean;
}

interface IMyTicketsTable {
  tickets: TicketTableType[];
}

const MyTicketsTableRow: React.FC<IMyTicketsTableRow> = ({ data, isEven }) => {
  const router = useRouter();

  return (
    <div
      className={
        "cursor-pointer flex p-6 w-full justify-between items-center text-secondary rounded-md " +
        (isEven ? "bg-secondary-background" : "bg-secondary-background-accent")
      }
      onClick={() => {
        router.push(`/tickets/${data.id.slice(1)}`);
      }}
    >
      <div className="text-white font-bold">{data.id}</div>
      <TicketStatusBadge status={data.status} />
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>{data.createdAt}</div>
      <div>{data.updatedAt}</div>
    </div>
  );
};

const MyTicketsTable: React.FC<IMyTicketsTable> = ({ tickets }) => (
  <div className="flex flex-col gap-2.5">
    {tickets.map((ticket, key) => (
      <MyTicketsTableRow data={ticket} isEven={Boolean(key % 2)} key={key} />
    ))}
  </div>
);

export default MyTicketsTable;
