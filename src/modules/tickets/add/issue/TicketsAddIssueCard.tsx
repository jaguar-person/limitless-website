import React, { useState } from "react";
import Image from "next/image";
import IssueIcon from "../../../../images/issue.svg";
import { CheckIconChecked } from "../../../../components/stepper";

interface ITicketsAddIssueCard {
  title: string;
  description: string;
}

export const CardChecking = () => (
  <div className="w-[26px] h-[26px] bg-background rounded-full" />
);
export const CardChecked = () => (
  <div className="w-[26px] h-[26px] bg-gems rounded-full flex items-center justify-center">
    <CheckIconChecked />
  </div>
);

const TicketsAddIssueCard: React.FC<ITicketsAddIssueCard> = ({
  title,
  description,
}) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <div
      className={
        "card-container p-4 " +
        (isChecked ? "border-gems" : "border-secondary-background-accent")
      }
      onClick={() => {
        setChecked(!isChecked);
      }}
    >
      <div className="absolute top-3 right-3">
        {isChecked ? <CardChecked /> : <CardChecking />}
      </div>
      <Image src={IssueIcon} width={54} height={61} alt="issue" />
      <p className="text-base text-white font-semibold">{title}</p>
      <p className="text-xs text-secondary text-center">{description}</p>
    </div>
  );
};

export default TicketsAddIssueCard;
