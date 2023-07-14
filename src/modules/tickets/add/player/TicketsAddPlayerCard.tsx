import React, { useState } from "react";
import Image from "next/image";
import { StatusAlive, StatusDead } from "../../../../components/status";

interface ITicketsAddPlayerCard {
  name: string;
  id: string;
  icon: string;
  status: boolean;
}

const TicketsAddPlayerCard: React.FC<ITicketsAddPlayerCard> = ({
  name,
  id,
  icon,
  status,
}) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <div
      className={
        "relative cursor-pointer flex gap-2.5 items-center py-2 px-2.5 bg-secondary-background border rounded-md " +
        (isChecked ? "border-gems" : "border-secondary-background-accent")
      }
      onClick={() => {
        setChecked(!isChecked);
      }}
    >
      <Image
        src={require(`../../../../images/${icon}.png`)}
        width={64}
        height={64}
        alt="player"
        className="rounded-md"
      />
      <div className="absolute top-2 right-2">
        {status ? <StatusAlive /> : <StatusDead />}
      </div>
      <div className="fle flex-col ">
        <p className="text-white text-base">{name}</p>
        <p className="text-secondary">ID: {id}</p>
      </div>
    </div>
  );
};

export default TicketsAddPlayerCard;
