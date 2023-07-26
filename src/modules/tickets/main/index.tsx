import React from "react";
import TicketsSwitch from "./TicketsSwitch";
import TicketsLinkedAccounts from "./linked-accounts";
import TicketsMyTickets from "./my-tickets";
import { useRouter } from "next/router";
import { ROUTING_PATH } from "../../../utils/constants";

const TicketsMain: React.FC = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <div className="flex flex-col gap-8">
      <TicketsSwitch currentPath={currentPath} />
      {currentPath === ROUTING_PATH.TICKETS ? (
        <TicketsMyTickets />
      ) : (
        <TicketsLinkedAccounts />
      )}
    </div>
  );
};

export default TicketsMain;
