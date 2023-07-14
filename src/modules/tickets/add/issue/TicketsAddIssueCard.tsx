import React, { useState } from "react";
import Image from "next/image";
import IssueIcon from "../../../../images/issue.svg";
import { CheckIconChecked } from "../../../../components/stepper";

interface ITicketsAddIssueCard {
  title: string;
  description: string;
}

const IssueChecking = () => (
  <div className="w-[26px] h-[26px] bg-background rounded-full" />
);
const IssueChecked = () => (
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
        "relative p-4 bg-secondary-background border rounded-md flex flex-col gap-2.5 justify-center items-center " +
        (isChecked ? "border-gems" : "border-secondary-background-accent")
      }
      onClick={() => {
        setChecked(!isChecked);
      }}
    >
      <div className="absolute top-3 right-3">
        {isChecked ? <IssueChecked /> : <IssueChecking />}
      </div>
      <Image src={IssueIcon} width={54} height={61} alt="issue" />
      <p className="text-base text-white font-semibold">{title}</p>
      <p className="text-xs text-secondary text-center">{description}</p>
    </div>
  );
};

export default TicketsAddIssueCard;
