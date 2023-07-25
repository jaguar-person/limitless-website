import React, { useState } from "react";
import TicketsAddTitle from "../TicketsAddTitle";
import TicketsAddServerCard from "./TicketsAddServerCard";
import { SERVER_TYPES } from "../../../../utils/enums";
import TicketsAddServerGroup from "./TicketsAddServerGroup";

const MOCK_SERVERS = [
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.USA,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.USA,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.USA,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.USA,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.USA,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.USA,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.USA,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.EUR,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.EUR,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.EUR,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.EUR,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.EUR,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.EUR,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.EUR,
  },
  {
    name: "Quad Monthly",
    count: 2,
    isChecked: false,
    type: SERVER_TYPES.EUR,
  },
];

interface ITicketAddSelectServer {
  onCurrentStep: () => void;
  onDisabled: () => void;
}

const TicketAddSelectServer: React.FC<ITicketAddSelectServer> = ({
  onCurrentStep,
  onDisabled,
}) => {
  const [servers, setServers] = useState(MOCK_SERVERS);
  const handleCurrentServer = (currentIssue: number) => () => {
    onDisabled();
    setServers(
      servers.map((server, i) => {
        if (i === currentIssue) {
          return {
            ...server,
            isChecked: true,
          };
        } else
          return {
            ...server,
            isChecked: false,
          };
      })
    );
  };
  return (
    <div className="flex flex-col gap-2.5">
      <TicketsAddTitle onCurrentStep={onCurrentStep} title="Select a server" />
      <div className="flex flex-col gap-6">
        <TicketsAddServerGroup
          servers={servers}
          onCurrentServer={handleCurrentServer}
          currentServerType={SERVER_TYPES.USA}
        />
        <TicketsAddServerGroup
          servers={servers}
          onCurrentServer={handleCurrentServer}
          currentServerType={SERVER_TYPES.EUR}
        />
      </div>
    </div>
  );
};

export default TicketAddSelectServer;
