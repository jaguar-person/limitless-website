import React from "react";
import DropDown, {
  DropDownContainer,
  DropDownItem,
} from "../../../components/dropdown";
import LeaderBoardTable from "./LeaderBoardTable";
import HeatMap from "./HeatMap";

interface ILeaderBoardMain {
  isLeaderBoard: boolean;
  onLeaderBoard: () => void;
}

const LeaderBoardMain: React.FC<ILeaderBoardMain> = ({
  isLeaderBoard,
  onLeaderBoard,
}) => {
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
            <DropDownContainer>
              <DropDownItem>Lifetime</DropDownItem>
              <DropDownItem>Wipe</DropDownItem>
            </DropDownContainer>
          </DropDown>
        </div>
        {isLeaderBoard ? (
          <LeaderBoardTable onFlag={onLeaderBoard} />
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
