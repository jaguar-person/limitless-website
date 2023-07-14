import React from "react";
import Stepper from "../../../components/stepper";
import { TicketsAddSteps } from "../../../utils/enums";

interface ITicketAddSteps {
  currentStep: number;
}

const TicketAddStepsContainer: React.FC<ITicketAddSteps> = ({
  currentStep,
}) => (
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

export default TicketAddStepsContainer;
