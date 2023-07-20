import React, { useState } from "react";
import Image from "next/image";
import { CardChecked, CardChecking } from "../issue/TicketsAddIssueCard";

interface ITicketsAddServerCard {
  type: string;
  name: string;
  count: number;
}

const TicketsAddServerCard: React.FC<ITicketsAddServerCard> = ({
  type,
  name,
  count,
}) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <div
      className={
        "card-container flex flex-row gap-4 justify-between items-center md:vertical p-4 md:p-8 " +
        (isChecked
          ? "border-gems text-white"
          : "border-secondary-background-accent text-secondary")
      }
      onClick={() => {
        setChecked(!isChecked);
      }}
    >
      <Image
        src={require(`../../../../images/${type}.svg`)}
        width={54}
        height={61}
        alt="issue"
      />
      <p className="text-base">
        {count}x {name}
      </p>
      <div className="relative md:absolute md:top-3 md:right-3">
        {isChecked ? <CardChecked /> : <CardChecking />}
      </div>
    </div>
  );
};

export default TicketsAddServerCard;
