import React from "react";
import Stepper from "../../../components/stepper";
import { TicketsAddSteps } from "../../../utils/enums";

const TicketAddSteps: React.FC = () => (
  <div>
    <Stepper title="Issue" description="Describe your issue" />
    <Stepper title="Select a server" description="Describe your issue" />
    <Stepper title="Report a player" description="Describe your issue" />
    <Stepper title="Description" description="Describe your issue" />
  </div>
);

export default TicketAddSteps;
