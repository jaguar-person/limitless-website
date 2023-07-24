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
          <label
            className="flex items-center gap-2 text-secondary ml-2 border-b border-b-secondary-background-accent pb-2 cursor-pointer"
            key={key}
          >
            <input type="checkbox" name="checkbox" />
            {mode}
          </label>
        ))}
      </div>
    </DropDown>
  );
};

export default ServersDropDown;
