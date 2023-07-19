import React from "react";
import TicketsUserInfo from "./user_info";
import TicketsMain from "./main";

const Tickets: React.FC = () => (
  <div className="mt-6 md:mt-14 mb-48 md:mb-32 flex flex-col gap-7">
    <TicketsUserInfo />
    <TicketsMain />
  </div>
);

export default Tickets;
