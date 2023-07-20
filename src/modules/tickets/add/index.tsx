import React, { useState } from "react";
import { useRouter } from "next/router";
import TicketAddStepsContainer from "./TicketsAddStepsContainer";
import { TicketsAddSteps } from "../../../utils/enums";
import TicketAddChooseIssue from "./issue";
import TicketAddSelectServer from "./server";
import TicketAddReportPlayer from "./player";
import TicketAddDescription from "./description";
import Decoration from "../../../components/decoration";
import Button from "../../../components/button";

const TicketsAdd: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(TicketsAddSteps.ISSUE);
  const router = useRouter();

  const TicketsAddSwitch = (currentStep: number) => {
    switch (currentStep) {
      case TicketsAddSteps.ISSUE:
        return <TicketAddChooseIssue />;
      case TicketsAddSteps.SERVER:
        return (
          <TicketAddSelectServer
            onCurrentStep={() => {
              setCurrentStep(currentStep - 1);
            }}
          />
        );
      case TicketsAddSteps.PLAYER:
        return (
          <TicketAddReportPlayer
            onCurrentStep={() => {
              setCurrentStep(currentStep - 1);
            }}
          />
        );
      case TicketsAddSteps.DESCRIPTION:
        return (
          <TicketAddDescription
            onCurrentStep={() => {
              setCurrentStep(currentStep - 1);
            }}
          />
        );
      default:
        return <TicketAddChooseIssue />;
    }
  };

  const handleAdd = () => {
    if (currentStep === TicketsAddSteps.DESCRIPTION) {
      router.push("/tickets");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="mt-14 md:mt-48 mb-56 md:mb-28">
      <div className="flex flex-col gap-9 md:gap-24">
        <div className="flex flex-col gap-4 items-center">
          <Decoration color="gems" />
          <p className="text-center text-white font-bold text-5xl tracking-tighter">
            Create a Ticket
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-9">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <TicketAddStepsContainer
              currentStep={currentStep}
              onCurrentStep={(count) => {
                setCurrentStep(currentStep + count);
              }}
            />
            <div className="flex flex-col gap-2 flex-grow overflow-hidden">
              {TicketsAddSwitch(currentStep)}
            </div>
          </div>
          <div className="flex gap-2.5 md:self-end">
            <div
              className="w-1/2"
              onClick={() => {
                router.push("/tickets");
              }}
            >
              <Button
                name="Cancel"
                color="danger"
                bgColor="background"
                width="full"
              />
            </div>
            <div className="w-1/2" onClick={handleAdd}>
              <Button
                name={
                  currentStep === TicketsAddSteps.DESCRIPTION
                    ? "Send"
                    : "Continue"
                }
                bgColor="gems"
                width="full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsAdd;
