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
        "card-container vertical p-8 " +
        (isChecked
          ? "border-gems text-white"
          : "border-secondary-background-accent text-secondary")
      }
      onClick={() => {
        setChecked(!isChecked);
      }}
    >
      <div className="absolute top-3 right-3">
        {isChecked ? <CardChecked /> : <CardChecking />}
      </div>
      <Image
        src={require(`../../../../images/${type}.svg`)}
        width={54}
        height={61}
        alt="issue"
      />
      <p className="text-base  !font-semibold">
        {count}x {name}
      </p>
    </div>
  );
};

export default TicketsAddServerCard;
