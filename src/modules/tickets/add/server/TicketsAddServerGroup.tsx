import React from "react";
import TicketsAddServerCard from "./TicketsAddServerCard";
import { SERVER_TYPES } from "../../../../utils/enums";

type ServerType = {
  name: string;
  count: number;
  isChecked: boolean;
  type: SERVER_TYPES;
};

interface ITicketsAddServerGroup {
  servers: ServerType[];
  onCurrentServer: (i: number) => () => void;
  currentServerType: SERVER_TYPES;
}

const TicketsAddServerGroup: React.FC<ITicketsAddServerGroup> = ({
  servers,
  onCurrentServer,
  currentServerType,
}) => (
  <div className="flex flex-col gap-2">
    <p className="text-base text-white">
      {currentServerType === SERVER_TYPES.USA ? "USA" : "EU"} Servers
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
      {servers.map(
        (server, i) =>
          server.type === currentServerType && (
            <TicketsAddServerCard
              key={i}
              type={currentServerType}
              count={server.count}
              name={server.name}
              currentServer={server.isChecked}
              onCurrentServer={onCurrentServer(i)}
            />
          )
      )}
    </div>
  </div>
);

export default TicketsAddServerGroup;
