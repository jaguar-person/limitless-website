import React from "react";
import Decoration from "../../../components/decoration";
import DropDown from "../../../components/dropdown";
import FiltersModal from "./FiltersModal";
import LeaderBoardSettingsItem from "../settings/item";
import LeaderBoardSettingsServerDropDown from "../settings/LeaderBoardSettignsServerDropdown";
import LeaderBoardButton from "./LeaderBoardButton";

interface ILeaderBoardBottomSheet {
  isLeaderBoard: boolean;
  onLeaderBoard: (type: boolean) => void;
  onCurrentBarStatus: () => void;
}

const LeaderBoardBottomSheet: React.FC<ILeaderBoardBottomSheet> = ({
  isLeaderBoard,
  onLeaderBoard,
  onCurrentBarStatus,
}) => {
  const handleLeaderBoard = () => {
    onLeaderBoard(!isLeaderBoard);
  };
  return (
    <div className="md:hidden flex flex-col gap-6 mx-4 mb-4">
      <div className="self-center" onClick={onCurrentBarStatus}>
        <Decoration color="points" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <DropDown title="PVP" width="full" />
          <FiltersModal />
        </div>
        <LeaderBoardSettingsItem title="">
          <LeaderBoardSettingsServerDropDown isFixed={false} />
        </LeaderBoardSettingsItem>
        <div className="mt-1">
          <LeaderBoardButton
            name={isLeaderBoard ? "Heatmap" : "LeaderBoard"}
            onClick={handleLeaderBoard}
          />
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardBottomSheet;
