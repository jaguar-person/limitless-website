import React, { useState } from "react";
import SearchBar from "../../../components/search-bar";
import LeaderBoardSettingsItem from "./item";
import DropDown from "../../../components/dropdown";
import LeaderBoardSettingsSwitch from "./LeaderBoardSettingsSwitch";
import LeaderBoardSettingsServerDropDown from "./LeaderBoardSettignsServerDropdown";
import LeaderBoardBottomSheet from "../shared/LeaderBoardBottomSheet";

interface ILeaderBoardSetting {
  isLeaderBoard: boolean;
  onLeaderBoard: (type: boolean) => void;
}

const LeaderBoardSettings: React.FC<ILeaderBoardSetting> = ({
  isLeaderBoard,
  onLeaderBoard,
}) => {
  const [isShowBottomSheet, setShowBottomSheet] = useState(false);
  const [isServerDropdown, setServerDropdown] = useState(false);

  const handleShowBottomSheet = () => {
    setShowBottomSheet(!isShowBottomSheet);
    setServerDropdown(false);
  };

  const handleServerDropdown = () => {
    setServerDropdown(!isServerDropdown);
  };

  return (
    <div
      className={`fixed md:relative left-0 bottom-0 p-4 md:py-4 flex flex-col gap-6 md:gap-4 bg-background md:bg-secondary-background border-t border-t-background-light md:border md:border-secondary-background-accent rounded-t-2xl md:rounded-md md:min-h-[770px] min-w-[300px] z-30 md:z-0 w-full md:w-fit shadow-lg md:shadow-none transition-all duration-200 ${
        isShowBottomSheet
          ? "h-12"
          : isServerDropdown
          ? "h-[71%] overflow-y-auto"
          : "h-60"
      } `}
    >
      <div className="md:block hidden">
        <SearchBar icon="search" placeholder="Search by ID or username..." />
      </div>
      <div className="md:flex hidden flex-col gap-2.5">
        <div className="text-white text-xl font-bold hidden md:block">
          Settings
        </div>
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
              <div className="dropdown-container min-w-[190px] text-secondary p-3 !bg-secondary-background-accent">
                Some Stats
              </div>
            </DropDown>
          </LeaderBoardSettingsItem>
        </div>
      </div>
      <LeaderBoardBottomSheet
        isLeaderBoard={isLeaderBoard}
        onLeaderBoard={onLeaderBoard}
        isShowBottomSheet={isShowBottomSheet}
        onShowBottomSheet={handleShowBottomSheet}
        onServerDropdown={handleServerDropdown}
      />
    </div>
  );
};

export default LeaderBoardSettings;
