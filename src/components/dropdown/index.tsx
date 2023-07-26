import React from "react";
import Image from "next/image";
import { useDetectClickOutside } from "react-detect-click-outside";

import ArrowDown from "../../images/arrow-down.svg";
import { useState } from "react";

interface IDropdown {
  children?: React.ReactNode;
  title: React.ReactNode;
  bgColor?: string;
  width: "fit" | "full";
}

const DropDown: React.FC<IDropdown> = ({
  children,
  bgColor = "secondary-background",
  title,
  width = "fit",
}) => {
  const [isShowMenu, setShowMenu] = useState(false);

  const closeShowMenu = () => {
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(!isShowMenu);
  };

  const ref = useDetectClickOutside({ onTriggered: closeShowMenu });

  return (
    <div className={`relative cursor-pointer w-full md:w-${width}`} ref={ref}>
      <div
        className={`py-3 px-5 bg-${bgColor} border-secondary-background-accent flex md:gap-2.5 justify-between w-full rounded-md`}
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
