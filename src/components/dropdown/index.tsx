import React, { MouseEventHandler } from "react";
import Image from "next/image";
import { useDetectClickOutside } from "react-detect-click-outside";

import ArrowDown from "../../images/arrow-down.svg";
import { useState } from "react";

interface IDropdown {
  children?: React.ReactNode;
  title: React.ReactNode;
  bgColor?: string;
  width: "fit" | "full";
  onServerDropdown?: () => void;
  isLeaderBoard?: boolean;
}

export const DropDownItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="border-b border-b-secondary-background-accent pl-3 pb-2">
    {children}
  </div>
);

export const DropDownContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="dropdown-container">{children}</div>;

const DropDown: React.FC<IDropdown> = ({
  children,
  bgColor = "secondary-background",
  title,
  width = "fit",
  onServerDropdown,
  isLeaderBoard = false,
}) => {
  const [isShowMenu, setShowMenu] = useState(false);

  const closeShowMenu = () => {
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(!isShowMenu);
    onServerDropdown && onServerDropdown();
  };

  const ref = useDetectClickOutside({ onTriggered: closeShowMenu });

  return (
    <div
      className={`relative cursor-pointer w-full md:w-${width}`}
      ref={isLeaderBoard ? null : ref}
    >
      <div
        className={`py-3 px-5 bg-${bgColor} border border-secondary-background-accent flex md:gap-2 justify-between w-full rounded-md`}
        onClick={handleShowMenu}
      >
        <div className="text-secondary font-semibold text-base">{title}</div>
        <Image src={ArrowDown} width={12} height={8} alt="arrowDown" />
      </div>
      {!!isShowMenu && children}
    </div>
  );
};

export default DropDown;
