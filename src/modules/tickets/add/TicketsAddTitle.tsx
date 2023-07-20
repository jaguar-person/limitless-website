import React from "react";
import TitleArrow from "../../../components/title-arrow";
interface ITicketsAddTitle {
  onCurrentStep?: () => void;
  title: string;
}

const TicketsAddTitle: React.FC<ITicketsAddTitle> = ({
  onCurrentStep,
  title,
}) => (
  <div
    className="hidden md:block"
    onClick={() => {
      onCurrentStep && onCurrentStep();
    }}
  >
    <TitleArrow title={title} />
  </div>
);

export default TicketsAddTitle;
