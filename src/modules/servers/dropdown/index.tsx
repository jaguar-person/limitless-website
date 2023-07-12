import React from "react";
import DropDown from "../../../components/dropdown";

const ServerDropDown: React.FC = () => {
  const gameModes = [
    "All Servers",
    "Quad Monthly",
    "Low Pop",
    "Main Monthly",
    "Trio Weekly",
  ];

  return (
    <DropDown title="Game Modes">
      <div className="mt-2.5 right-0 absolute rounded-md bg-secondary-background flex flex-col pl-2.5 w-[190px] ">
        {gameModes.map((mode) => (
          <div
            className="flex gap-2 border-b  py-2 border-secondary-background-accent items-center"
            key={mode}
          >
            <input type="checkbox" className="w-3.5 h-3.5" />
            <p className="text-secondary">{mode}</p>
          </div>
        ))}
      </div>
    </DropDown>
  );
};

export default ServerDropDown;
