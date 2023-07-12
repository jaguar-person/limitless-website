import React from "react";

interface ILeaderBoardSettingsItem {
  children: React.ReactNode;
  title: string;
}

const LeaderBoardSettingsItem: React.FC<ILeaderBoardSettingsItem> = ({
  children,
  title,
}) => (
  <div>
    <p className="text-secondary">{title}</p>
    {children}
  </div>
);

export default LeaderBoardSettingsItem;
