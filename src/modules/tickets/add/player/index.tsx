import React from "react";
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
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: false,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
  {
    name: "TripleZone",
    id: "76561198026217208",
    icon: "player",
    status: true,
  },
];

const TicketAddReportPlayer: React.FC<ITicketAddStep> = ({ onCurrentStep }) => (
  <div className="relative flex flex-col gap-7">
    <div className="absolute right-0 top-0 w-[30%]">
      <SearchBar icon="search_2" placeholder="Search by name or Steam ID..." />
    </div>
    <TicketsAddTitle onCurrentStep={onCurrentStep} title="Report a Player" />
    <div className="grid grid-cols-3 gap-2.5">
      {MOCK_PLAYERS.map((player, i) => (
        <TicketsAddPlayerCard
          key={i}
          name={player.name}
          id={player.id}
          icon={player.icon}
          status={player.status}
        />
      ))}
    </div>
  </div>
);

export default TicketAddReportPlayer;
