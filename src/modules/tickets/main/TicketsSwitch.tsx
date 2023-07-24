import { useRouter } from "next/router";
import React, { MouseEventHandler, useState } from "react";
import { ROUTING_PATH } from "../../../utils/constants";

interface ISwitchIcon {
  isClicked: boolean;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
  name: string;
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

const TicketsSwitch: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  const router = useRouter();
  const handleSwitch = (currentPath: string) => () => {
    router.push(`/${currentPath}`);
  };
  return (
    <div className="flex md:gap-2.5 border-b-secondary-background border-b-[3px]">
      <SwitchIcon
        name="Link Accounts"
        isClicked={currentPath === ROUTING_PATH.ACCOUNTS}
        onClick={handleSwitch(ROUTING_PATH.ACCOUNTS)}
      />
      <SwitchIcon
        name="Tickets"
        isClicked={currentPath === ROUTING_PATH.TICKETS}
        onClick={handleSwitch(ROUTING_PATH.TICKETS)}
      />
    </div>
  );
};

export default TicketsSwitch;
