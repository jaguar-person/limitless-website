import React from "react";
import { ITicketAddStep } from "../issue";
import TicketsAddTitle from "../TicketsAddTitle";
import TicketsAddServerCard from "./TicketsAddServerCard";

const MOCK_USA_SERVERS = [
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
];

const MOCK_EUR_SERVERS = [
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
  {
    name: "Quad Monthly",
    count: 2,
  },
];

const TicketAddSelectServer: React.FC<ITicketAddStep> = ({ onCurrentStep }) => (
  <div className="flex flex-col gap-2.5">
    <TicketsAddTitle onCurrentStep={onCurrentStep} title="Select a server" />
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5">
        <p className="text-base text-secondary">US Servers</p>
        <div className="grid grid-cols-4 gap-2.5">
          {MOCK_USA_SERVERS.map((server, i) => (
            <TicketsAddServerCard
              key={i}
              type="usa"
              count={server.count}
              name={server.name}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <p className="text-base text-secondary">EU Servers</p>
        <div className="grid grid-cols-4 gap-2.5">
          {MOCK_EUR_SERVERS.map((server, i) => (
            <TicketsAddServerCard
              key={i}
              type="eur"
              count={server.count}
              name={server.name}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TicketAddSelectServer;
