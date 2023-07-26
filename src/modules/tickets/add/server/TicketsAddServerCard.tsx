import React, { useState } from "react";
import Image from "next/image";
import { CardChecked, CardChecking } from "../issue/TicketsAddIssueCard";
import { SERVER_TYPES } from "../../../../utils/enums";

interface ITicketsAddServerCard {
  type: SERVER_TYPES;
  name: string;
  count: number;
  currentServer: boolean;
  onCurrentServer: () => void;
}

const TicketsAddServerCard: React.FC<ITicketsAddServerCard> = ({
  type,
  name,
  count,
  currentServer,
  onCurrentServer,
}) => {
  return (
    <div
      className={
        "card-container flex flex-row gap-4 justify-between items-center md:vertical p-4 md:p-8 " +
        (currentServer
          ? "!border-gems text-white"
          : "border-secondary-background-accent text-secondary")
      }
      onClick={() => {
        onCurrentServer();
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
        {currentServer ? <CardChecked /> : <CardChecking />}
      </div>
    </div>
  );
};

export default TicketsAddServerCard;
