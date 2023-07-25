import React from "react";
import TicketsUserInfo from "../tickets/user_info";
import TicketsMain from "../tickets/main";

const Accounts: React.FC = () => (
  <div className="mt-6 md:mt-14 mb-52 md:mb-80 flex flex-col gap-7">
    <TicketsUserInfo />
    <TicketsMain />
  </div>
);

export default Accounts;
