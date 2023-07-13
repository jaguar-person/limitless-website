import React, { MouseEventHandler } from "react";
import { useState } from "react";

interface ISwitchIcon {
  flag: boolean;
  name: string;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}

interface ILeaderBoardSwitch {
  leftName: string;
  rightName: string;
  flag: boolean;
  onFlag?: (type: boolean) => void;
}

const SwitchIcon: React.FC<ISwitchIcon> = ({ flag, name, onClick }) => (
  <div
    className={
      "p-3.5 rounded-md border cursor-pointer flex-1 text-center " +
      (flag
        ? "text-gems border-gems bg-gems/20"
        : " text-secondary-in-box bg-secondary-background-accent border-[#44434F]")
    }
    onClick={onClick}
  >
    {name}
  </div>
);

const LeaderBoardSettingsSwitch: React.FC<ILeaderBoardSwitch> = ({
  leftName,
  rightName,
  flag,
  onFlag,
}) => {
  const [currentFlag, setCurrentFlag] = useState(flag);

  const handleSwitch = (flag: boolean) => (event: React.MouseEvent) => {
    onFlag && onFlag(flag);
    setCurrentFlag(flag);
  };
  return (
    <div className="flex gap-2.5 w-full">
      <SwitchIcon
        flag={currentFlag}
        name={leftName}
        onClick={handleSwitch(true)}
      />
      <SwitchIcon
        flag={!currentFlag}
        name={rightName}
        onClick={handleSwitch(false)}
      />
    </div>
  );
};

export default LeaderBoardSettingsSwitch;
