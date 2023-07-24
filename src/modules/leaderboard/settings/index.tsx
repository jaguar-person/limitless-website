import React from "react";
import SearchBar from "../../../components/search-bar";
import LeaderBoardSettingsItem from "./item";
import DropDown from "../../../components/dropdown";
import LeaderBoardSettingsSwitch from "./LeaderBoardSettingsSwitch";
import LeaderBoardSettingsServerDropDown from "./LeaderBoardSettignsServerDropdown";

interface ILeaderBoardSetting {
  isLeaderBoard: boolean;
  onLeaderBoard: (type: boolean) => void;
}

const LeaderBoardSettings: React.FC<ILeaderBoardSetting> = ({
  isLeaderBoard,
  onLeaderBoard,
}) => (
  <div className="hidden p-4 md:flex flex-col gap-4 bg-secondary-background border-secondary-background-accent rounded-md min-h-[700px]">
    <SearchBar icon="search" placeholder="Search by ID or username..." />
    <div className="flex flex-col gap-2.5 ">
      <div className="text-white text-xl font-bold">Settings</div>
      <div className="flex flex-col gap-2.5">
        <LeaderBoardSettingsItem title="Selected Server">
          <LeaderBoardSettingsServerDropDown />
        </LeaderBoardSettingsItem>
        <LeaderBoardSettingsItem title="Type">
          <LeaderBoardSettingsSwitch
            leftName="Leaderboard"
            rightName="Heatmap"
            flag={isLeaderBoard}
            onFlag={onLeaderBoard}
          />
        </LeaderBoardSettingsItem>
        {!isLeaderBoard && (
          <LeaderBoardSettingsItem title="Show Icons">
            <LeaderBoardSettingsSwitch
              leftName="No"
              rightName="Yes"
              flag={false}
            />
          </LeaderBoardSettingsItem>
        )}
        <LeaderBoardSettingsItem title="Stats Type">
          <DropDown
            title="Kills"
            bgColor="secondary-background-accent"
            width="full"
          >
            <div className="dropdown-container min-w-[190px] text-secondary">
              Some Stats
            </div>
          </DropDown>
        </LeaderBoardSettingsItem>
      </div>
    </div>
  </div>
);

export default LeaderBoardSettings;
