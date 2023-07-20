import React from "react";
import Stepper from "../../../components/stepper";
import { TicketsAddSteps } from "../../../utils/enums";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";
import Icon from "../../../components/icon";

interface ITicketAddSteps {
  currentStep: number;
  onCurrentStep: (count: number) => void;
}

const TicketAddStepsContainer: React.FC<ITicketAddSteps> = ({
  currentStep,
  onCurrentStep,
}) => {
  const isMobile = useIsMobile();
  if (isMobile)
    return (
      <div className="flex justify-between items-center">
        <div
          onClick={() => {
            currentStep > 0 && currentStep < 4 && onCurrentStep(-1);
          }}
        >
          <Icon icon="arrow-left" />
        </div>
        <p className="text-white text-base font-bold">
          Select an Issue ({currentStep + 1} / 4)
        </p>
        <div
          onClick={() => {
            currentStep < 3 && currentStep >= 0 && onCurrentStep(1);
          }}
        >
          <Icon icon="arrow-right" />
        </div>
      </div>
    );
  else
    return (
      <div>
        <Stepper
          isChecked={currentStep >= TicketsAddSteps.SERVER}
          title="Issue"
          description="Describe your issue"
        />
        <Stepper
          isChecked={currentStep >= TicketsAddSteps.PLAYER}
          title="Select a server"
          description="Describe your issue"
        />
        <Stepper
          isChecked={currentStep >= TicketsAddSteps.DESCRIPTION}
          title="Report a player"
          description="Describe your issue"
        />
        <Stepper title="Description" description="Describe your issue" />
      </div>
    );
};

export default TicketAddStepsContainer;
