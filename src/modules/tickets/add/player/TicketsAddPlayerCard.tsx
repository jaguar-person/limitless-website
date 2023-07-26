import React, { useState } from "react";
import Image from "next/image";
import { StatusAlive, StatusDead } from "../../../../components/status";
import { PlayerType } from "../../../../utils/types";

interface ITicketsAddPlayerCard {
  currentPlayer: PlayerType;
  onCurrentPlayer: () => void;
}

const TicketsAddPlayerCard: React.FC<ITicketsAddPlayerCard> = ({
  currentPlayer,
  onCurrentPlayer,
}) => {
  return (
    <div
      className={
        "relative cursor-pointer flex gap-2.5 items-center py-2 px-2.5 bg-secondary-background border rounded-md " +
        (currentPlayer.isChecked
          ? "!border-gems"
          : "border-secondary-background-accent")
      }
      onClick={onCurrentPlayer}
    >
      <Image
        src={require(`../../../../images/${currentPlayer.icon}.png`)}
        width={64}
        height={64}
        alt="player"
        className="rounded-md"
      />
      <div className="absolute top-2 right-2">
        {currentPlayer.status ? <StatusAlive /> : <StatusDead />}
      </div>
      <div className="fle flex-col ">
        <p className="text-white text-base">{currentPlayer.name}</p>
        <p className="text-secondary">ID: {currentPlayer.id}</p>
      </div>
    </div>
  );
};

export default TicketsAddPlayerCard;
