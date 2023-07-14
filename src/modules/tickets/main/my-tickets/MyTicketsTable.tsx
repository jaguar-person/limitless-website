import React from "react";
import { TicketType } from "../../../../utils/enums";
import { TicketTableType } from "../../../../utils/types";

interface IMyTicketsTableRow {
  data: TicketTableType;
  isEven: boolean;
}

interface IMyTicketsTable {
  tickets: TicketTableType[];
}

const MyTicketsTableRow: React.FC<IMyTicketsTableRow> = ({ data, isEven }) => (
  <div
    className={
      "flex p-6 w-full justify-between items-center text-secondary rounded-md " +
      (isEven ? "bg-secondary-background" : "bg-secondary-background-accent")
    }
  >
    <div className="text-white font-bold">{data.id}</div>
    <div
      className={`py-1 px-3 rounded-[37px] font-medium ${
        data.type === TicketType.OPENED
          ? "text-gems bg-gems/[22%]"
          : data.type === TicketType.CLOSED
          ? "text-danger bg-danger/[22%]"
          : "text-points bg-points/[22%]"
      }`}
    >
      {data.type}
    </div>
    <div>{data.title}</div>
    <div>{data.description}</div>
    <div>{data.createdAt}</div>
    <div>{data.updatedAt}</div>
  </div>
);

const MyTicketsTable: React.FC<IMyTicketsTable> = ({ tickets }) => (
  <div className="flex flex-col gap-2.5">
    {tickets.map((ticket, key) => (
      <MyTicketsTableRow data={ticket} isEven={Boolean(key % 2)} key={key} />
    ))}
  </div>
);

export default MyTicketsTable;
