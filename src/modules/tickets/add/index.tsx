import React, { useState } from "react";
import { useRouter } from "next/router";
import TicketAddStepsContainer from "./TicketsAddSteps";
import { TicketsAddSteps } from "../../../utils/enums";
import TicketAddChooseIssue from "./issue";
import TicketAddSelectServer from "./server";
import TicketAddReportPlayer from "./player";
import TicketAddDescription from "./description";

const TicketsAddSwitch = (currentStep: number) => {
  switch (currentStep) {
    case TicketsAddSteps.ISSUE:
      return <TicketAddChooseIssue />;
    case TicketsAddSteps.SERVER:
      return <TicketAddSelectServer />;
    case TicketsAddSteps.PLAYER:
      return <TicketAddReportPlayer />;
    case TicketsAddSteps.DESCRIPTION:
      return <TicketAddDescription />;
    default:
      return <TicketAddChooseIssue />;
  }
};

const TicketsAdd: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(TicketsAddSteps.ISSUE);
  const router = useRouter();

  const handleAdd = () => {
    if (currentStep === TicketsAddSteps.DESCRIPTION) {
      router.push("/tickets");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="mt-48 mb-28">
      <div className="flex flex-col gap-24">
        <p className="text-center text-white font-bold text-5xl">
          Create a Ticket
        </p>
        <div className="flex flex-col gap-9">
          <div className="flex gap-10">
            <div className="flex-1 min-w-[190px]">
              <TicketAddStepsContainer currentStep={currentStep} />
            </div>
            <div className="flex flex-col gap-2 flex-grow overflow-hidden">
              {TicketsAddSwitch(currentStep)}
            </div>
          </div>
          <div className="flex gap-2.5 self-end">
            <button className="btn-custom bg-secondary-background text-base text-secondary">
              Cancel
            </button>
            <button
              className="btn-custom bg-gems text-base text-black/75 "
              onClick={handleAdd}
            >
              {currentStep === TicketsAddSteps.DESCRIPTION
                ? "Send"
                : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsAdd;
