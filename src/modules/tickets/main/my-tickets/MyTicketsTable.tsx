import React from "react";
import { useRouter } from "next/router";

import { TicketTableType } from "../../../../utils/types";
import TicketStatusBadge from "../../shared/TicketStatus";
import { useIsMobile } from "../../../../utils/hooks/useIsMobile";
import { ROUTING_PATH } from "../../../../utils/constants";

interface IMyTicketsTableRow {
  data: TicketTableType;
  isEven: boolean;
}

interface IMyTicketsTable {
  tickets: TicketTableType[];
}

const MyTicketsTableRow: React.FC<IMyTicketsTableRow> = ({ data, isEven }) => {
  const router = useRouter();
  const isMobile = useIsMobile();

  return (
    <div
      className={
        "relative cursor-pointer flex flex-col gap-2  xl:gap-16 md:flex-row py-4 md:p-6 w-full justify-between md:justify-start items-start md:items-center text-secondary md:rounded-md bg-background border-b border-b-secondary-background " +
        (isEven
          ? "md:bg-secondary-background"
          : "md:bg-secondary-background-accent")
      }
      onClick={() => {
        router.push(`${ROUTING_PATH.TICKETS}/${data.id.slice(1)}`);
      }}
    >
      <div className="flex justify-between w-full md:w-1/5  items-center">
        <div className={isMobile ? "" : "font-bold text-white"}>
          {isMobile ? data.title : data.id}
        </div>
        <TicketStatusBadge status={data.status} />
      </div>
      <div className={isMobile ? "truncate w-full text-left" : ""}>
        {isMobile ? data.description : data.title}
      </div>
      <div className="flex justify-between md:justify-start xl:gap-16 w-full md:w-fit items-center">
        <div className={isMobile ? "text-white font-bold text-xs" : ""}>
          {isMobile ? data.id : data.description}
        </div>
        <div>{data.createdAt}</div>
      </div>
      <div className="md:block hidden">{data.updatedAt}</div>
    </div>
  );
};

const MyTicketsTable: React.FC<IMyTicketsTable> = ({ tickets }) => (
  <div className="flex flex-col md:gap-2.5">
    {tickets.map((ticket, key) => (
      <MyTicketsTableRow data={ticket} isEven={Boolean(key % 2)} key={key} />
    ))}
  </div>
);

export default MyTicketsTable;
