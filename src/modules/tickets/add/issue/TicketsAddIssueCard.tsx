import React, { useState } from "react";
import Image from "next/image";
import IssueIcon from "../../../../images/issue.svg";
import { CheckIconChecked } from "../../../../components/stepper";

interface ITicketsAddIssueCard {
  title: string;
  description: string;
  currentIssue: boolean;
  onCurrentIssue: () => void;
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
  currentIssue,
  onCurrentIssue,
}) => {
  return (
    <div
      className={
        "card-container flex flex-col items-start md:items-center gap-2 p-4 " +
        (currentIssue ? "border-gems" : "border-secondary-background-accent")
      }
      onClick={() => {
        onCurrentIssue();
      }}
    >
      <div className="absolute top-3 right-3">
        {currentIssue ? <CardChecked /> : <CardChecking />}
      </div>
      <Image
        src={IssueIcon}
        width={54}
        height={61}
        alt="issue"
        className="hidden md:block"
      />
      <p className="text-base text-white font-semibold">{title}</p>
      <p className="text-base text-secondary text-left md:text-center">
        {description}
      </p>
    </div>
  );
};

export default TicketsAddIssueCard;
