import React from "react";
import TicketAddSteps from "./TicketsAddSteps";
import TicketsAddTitle from "./TicketsAddTitle";
import TicketAddChooseIssue from "./issue";

const TicketAdd: React.FC = () => (
  <div className="mt-56 mb-28">
    <div className="flex flex-col gap-24">
      <p className="text-center text-white font-bold text-5xl">
        Create a Ticket
      </p>
      <div className="flex flex-col gap-9">
        <div className="flex gap-10">
          <div className="flex-1 min-w-[190px]">
            <TicketAddSteps />
          </div>
          <div className="flex flex-col gap-2 flex-grow overflow-hidden">
            <TicketAddChooseIssue />
          </div>
        </div>
        <div className="flex gap-2.5 self-end">
          <button className="btn-custom bg-secondary-background text-base text-secondary">
            Cancel
          </button>
          <button className="btn-custom bg-gems text-base text-black/75 ">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default TicketAdd;
