import React from "react";
import { ITicketAddStep } from "../issue";
import TicketsAddTitle from "../TicketsAddTitle";
import FileUpload from "../../../../components/file-upload";

const TicketAddDescription: React.FC<ITicketAddStep> = ({ onCurrentStep }) => (
  <div className="relative flex flex-col gap-7">
    <TicketsAddTitle onCurrentStep={onCurrentStep} title="Report a Player" />
    <textarea className="w-full text-sm text-secondary min-h-[250px] bg-secondary-background border border-secondary-background-accent rounded-lg p-4 focus:outline-none">
      Please enter a brief summary of why you are creating this ticket.
    </textarea>
    <FileUpload />
  </div>
);

export default TicketAddDescription;
