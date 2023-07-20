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
  <div className="relative flex flex-col gap-4 md:gap-7">
    <div className=" md:absolute md:right-0 md:top-0 w-full md:w-[30%]">
      <SearchBar icon="search_2" placeholder="Search by name or Steam ID..." />
    </div>
    <TicketsAddTitle onCurrentStep={onCurrentStep} title="Report a Player" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
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
