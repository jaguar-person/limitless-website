import React from "react";
import SearchBar from "../../../components/search-bar";
import LeaderBoardSettingsItem from "./item";
import DropDown from "../../../components/dropdown";
import LeaderBoardSettingsServerDropDown from "./server-dropdown";
import LeaderBoardSettingsSwitch from "./switch";

const LeaderBoardSettings = () => (
  <div className="p-4 flex flex-col gap-4 bg-secondary-background border-secondary-background-accent rounded-md min-h-[700px]">
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
          />
        </LeaderBoardSettingsItem>
        <LeaderBoardSettingsItem title="Show Icons">
          <LeaderBoardSettingsSwitch leftName="No" rightName="Yes" />
        </LeaderBoardSettingsItem>
        <LeaderBoardSettingsItem title="Stats Type">
          <DropDown title="Kills" />
        </LeaderBoardSettingsItem>
      </div>
    </div>
  </div>
);

export default LeaderBoardSettings;
