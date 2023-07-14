import React from "react";
import { TicketStatus } from "../../../utils/enums";

interface ITicketStatusBadge {
  status: TicketStatus;
}

const TicketStatusBadge: React.FC<ITicketStatusBadge> = ({ status }) => (
  <div
    className={`py-1 px-3 rounded-[37px] font-medium ${
      status === TicketStatus.OPENED
        ? "text-gems bg-gems/[22%]"
        : status === TicketStatus.CLOSED
        ? "text-danger bg-danger/[22%]"
        : "text-points bg-points/[22%]"
    }`}
  >
    {status}
  </div>
);

export default TicketStatusBadge;
