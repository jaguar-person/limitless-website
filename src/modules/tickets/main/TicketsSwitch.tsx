import React, { MouseEventHandler } from "react";

interface ISwitchIcon {
  isClicked: boolean;
  onClick: () => void;
  name: string;
}

interface ITicketsSwitch {
  isClicked: boolean;
  onSwitch: (isSwitch: boolean) => () => void;
}

const SwitchIcon: React.FC<ISwitchIcon> = ({ isClicked, onClick, name }) => (
  <div
    className={
      "cursor-pointer py-4 md:py-2.5 md:px-5 flex text-base md:text-lg justify-center flex-1 md:flex-none " +
      (isClicked
        ? " border-b-gems border-b-[3px] text-white"
        : "text-secondary")
    }
    onClick={onClick}
  >
    {name}
  </div>
);

const TicketsSwitch: React.FC<ITicketsSwitch> = ({ isClicked, onSwitch }) => {
  return (
    <div className="flex md:gap-2.5 border-b-secondary-background border-b-[3px]">
      <SwitchIcon
        name="Link Accounts"
        isClicked={!isClicked}
        onClick={onSwitch(false)}
      />
      <SwitchIcon
        name="Tickets"
        isClicked={isClicked}
        onClick={onSwitch(true)}
      />
    </div>
  );
};

export default TicketsSwitch;
