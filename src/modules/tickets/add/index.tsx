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
  const [isDisabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    setDisabled(false);
  };

  const handleCurrentStep = (count: number) => () => {
    setCurrentStep(currentStep + count);
  };

  const router = useRouter();

  const TicketsAddSwitch = (currentStep: number) => {
    switch (currentStep) {
      case TicketsAddSteps.ISSUE:
        return <TicketAddChooseIssue onDisabled={handleDisabled} />;
      case TicketsAddSteps.SERVER:
        return (
          <TicketAddSelectServer
            onCurrentStep={handleCurrentStep(-1)}
            onDisabled={handleDisabled}
          />
        );
      case TicketsAddSteps.PLAYER:
        return (
          <TicketAddReportPlayer
            onCurrentStep={handleCurrentStep(-1)}
            onDisabled={handleDisabled}
          />
        );
      case TicketsAddSteps.DESCRIPTION:
        return <TicketAddDescription onCurrentStep={handleCurrentStep(-1)} onDisabled={handleDisabled} />;
    }
  };

  const handleAdd = () => {
    setDisabled(true);
    if (!isDisabled) {
      if (currentStep === TicketsAddSteps.DESCRIPTION) {
        router.push("/tickets");
      } else {
        setCurrentStep(currentStep + 1);
      }
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
                setDisabled(true);
              }}
              isDisabled={isDisabled}
            />
            <div className="flex flex-col gap-2 flex-grow overflow-hidden">
              {TicketsAddSwitch(currentStep)}
            </div>
          </div>
          <div className="flex gap-2.5 md:self-end">
            <Button
              name="Cancel"
              color="danger"
              bgColor="background"
              width="full"
              onClick={() => {
                router.push("/tickets");
              }}
            />
            <Button
              name={
                currentStep === TicketsAddSteps.DESCRIPTION
                  ? "Send"
                  : "Continue"
              }
              bgColor="gems"
              width="full"
              onClick={handleAdd}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsAdd;
