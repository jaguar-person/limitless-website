import React from "react";
import Image from "next/image";
import ArrowLeftIcon from "../../../images/arrow-left.svg";

interface ITicketsAddTitle {
  onCurrentStep?: () => void;
  title: string;
}

const TicketsAddTitle: React.FC<ITicketsAddTitle> = ({
  onCurrentStep,
  title,
}) => (
  <div
    className="flex gap-5 cursor-pointer"
    onClick={() => {
      onCurrentStep && onCurrentStep();
    }}
  >
    <div className="py-2 px-3.5 flex items-center justify-center rounded-md bg-secondary-background border border-secondary-background-accent">
      <Image src={ArrowLeftIcon} width={10} height={16} alt="arrow" />
    </div>
    <p className="text-white text-[22px] leading-10">{title}</p>
  </div>
);

export default TicketsAddTitle;
