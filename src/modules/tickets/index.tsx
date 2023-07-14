import React from "react";
import TicketsUserInfo from "./user_info";
import TicketsMain from "./main";

const Tickets: React.FC = () => (
  <div className="mt-32 mb-20 flex flex-col gap-7">
    <TicketsUserInfo />
    <TicketsMain />
  </div>
);

export default Tickets;
