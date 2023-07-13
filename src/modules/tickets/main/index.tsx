import React, { useState } from "react";
import TicketsSwitch from "./TicketsSwitch";
import TicketsLinkedAccounts from "./linked-accounts";
import TicketsMyTickets from "./my-tickets";

const TicketsMain: React.FC = () => {
  const [isTicket, setSwitchTicket] = useState(true);

  const handleSwitch = (flag: boolean) => () => {
    setSwitchTicket(flag);
  };

  return (
    <div className="flex flex-col gap-8">
      <TicketsSwitch isClicked={isTicket} onSwitch={handleSwitch} />
      {isTicket ? <TicketsMyTickets /> : <TicketsLinkedAccounts />}
    </div>
  );
};

export default TicketsMain;
