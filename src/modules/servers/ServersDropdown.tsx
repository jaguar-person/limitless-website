import React from "react";
import DropDown from "../../components/dropdown";

const ServersDropDown: React.FC = () => {
  const gameModes = [
    "All Servers",
    "Quad Monthly",
    "Low Pop",
    "Main Monthly",
    "Trio Weekly",
  ];

  return (
    <DropDown title="Game Modes">
      <div className="dropdown-container w-[190px] ">
        {gameModes.map((mode, key) => (
          <div
            className="flex gap-2 border-b  py-2 border-secondary-background-accent items-center"
            key={key}
          >
            <input type="checkbox" className="w-3.5 h-3.5" />
            <p className="text-secondary">{mode}</p>
          </div>
        ))}
      </div>
    </DropDown>
  );
};

export default ServersDropDown;
