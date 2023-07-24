import React, { useState } from "react";
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
    <DropDown title="Game Modes" width="fit">
      <div className="dropdown-container min-w-[190px] ">
        {gameModes.map((mode, key) => (
          <div
            className="flex items-center gap-2 py-2 px-2 border-b border-secondary-background-accent"
            key={key}
          >
            <input
              id={"checkbox" + key}
              type="checkbox"
              className="h-4 w-4 text-gems border-gems"
            />
            <label
              htmlFor={"checkbox" + key}
              className="cursor-pointer select-none text-secondary"
            >
              {mode}
            </label>
          </div>
        ))}
      </div>
    </DropDown>
  );
};

export default ServersDropDown;
