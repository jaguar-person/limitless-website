import React from "react";

interface ILeaderBoardSettingsItem {
  children: React.ReactNode;
  title: string;
}

const LeaderBoardSettingsItem: React.FC<ILeaderBoardSettingsItem> = ({
  children,
  title,
}) => (
  <div className="w-full">
    <p className="text-secondary">{title}</p>
    <div className="w-full flex">{children}</div>
  </div>
);

export default LeaderBoardSettingsItem;
