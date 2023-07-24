import React, { useState } from "react";
import { ITicketAddStep } from "../issue";
import TicketsAddTitle from "../TicketsAddTitle";
import SearchBar from "../../../../components/search-bar";
import TicketsAddPlayerCard from "./TicketsAddPlayerCard";

const MOCK_PLAYERS = [
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: false,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: false,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: false,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
    isChecked: false,
  },
];

const TicketAddReportPlayer: React.FC<ITicketAddStep> = ({ onCurrentStep }) => {
  const [players, setPlayers] = useState(MOCK_PLAYERS);
  const checkedCount =
    players.filter((player) => player.isChecked === true).length + 1;
  const handlePlayer = (currentPlayer: number) => () => {
    if (checkedCount < 11) {
      setPlayers(
        players.map((player, i) => {
          if (i === currentPlayer) {
            return {
              ...player,
              isChecked: !player.isChecked,
            };
          } else return player;
        })
      );
    } else {
      setPlayers(
        players.map((player, i) => {
          if (i === currentPlayer && player.isChecked === true) {
            return {
              ...player,
              isChecked: false,
            };
          } else return player;
        })
      );
    }
  };

  return (
    <div className="relative flex flex-col gap-4 md:gap-7">
      <div className=" md:absolute md:right-0 md:top-0 w-full md:w-[30%]">
        <SearchBar
          icon="search_2"
          placeholder="Search by name or Steam ID..."
        />
      </div>
      <TicketsAddTitle onCurrentStep={onCurrentStep} title="Report a Player" />
      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-2">
        {players.map((player, i) => (
          <TicketsAddPlayerCard
            key={i}
            currentPlayer={player}
            onCurrentPlayer={handlePlayer(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketAddReportPlayer;
