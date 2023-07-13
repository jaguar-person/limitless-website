import React from "react";
import TicketsUserInfo from "./user_info";

const Tickets: React.FC = () => (
  <div className="mt-40 mb-20 flex flex-col gap-7">
    <TicketsUserInfo />
    <div className="main flex flex-col gap-7"></div>
  </div>
);

export default Tickets;
