import React, { useState } from "react";
import DropDown from "../../../components/dropdown";
import LeaderBoardTable from "./LeaderBoardTable";
import HeatMap from "./HeatMap";

const LeaderBoardMain: React.FC = () => {
  const [isLearderBoard, setLeaderBoard] = useState(true);
  const handleFlag = () => {
    setLeaderBoard(!isLearderBoard);
  };
  return (
    <div className="flex flex-col gap-2.5 flex-grow overflow-hidden ">
      <div className="container">
        <div className="hidden md:flex justify-between">
          <div className="flex gap-2.5 items-center">
            <div className="py-1 px-3.5 border border-points bg-points/[8%] text-points font-semibold text-xs">
              PVP
            </div>
            <p className="text-white text-lg">US 2X Quad Monthly</p>
          </div>
          <DropDown
            title="Lifetime"
            bgColor="secondary-background-accent"
            width="fit"
          >
            <div className="dropdown-container text-secondary">
              <div className="border-b border-b-secondary-background-accent pl-2">
                Lifetime
              </div>
              <div className="border-b border-b-secondary-background-accent pl-2 pb-2">
                Wipe
              </div>
            </div>
          </DropDown>
        </div>
        {isLearderBoard ? (
          <LeaderBoardTable onFlag={handleFlag} />
        ) : (
          <div className="min-h-screen md:min-h-fit">
            <HeatMap />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderBoardMain;
