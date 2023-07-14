import React from "react";
import Image from "next/image";
import ArrowLeftIcon from "../../../images/arrow-left.svg";

const TicketsAddTitle: React.FC = () => (
  <div className="flex gap-5">
    <div className="py-2 px-3.5 flex items-center justify-center rounded-md bg-secondary-background border border-secondary-background-accent">
      <Image src={ArrowLeftIcon} width={10} height={16} alt="arrow" />
    </div>
    <p className="text-white text-[22px] leading-10">Choose an issue</p>
  </div>
);

export default TicketsAddTitle;
