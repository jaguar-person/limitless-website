import React from "react";

interface ITicketDetailsInfo {
  name: string;
  value: string;
}

const TicketDetailsInfo: React.FC<ITicketDetailsInfo> = ({ name, value }) => (
  <div className="flex justify-between font-medium">
    <p className="text-secondary-in-box">{name}</p>
    <p className={name === "Ticket ID" ? "text-points" : "text-white"}>
      {value}
    </p>
  </div>
);

export default TicketDetailsInfo;
