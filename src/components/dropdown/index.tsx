import React from "react";
import Image from "next/image";
import ArrowDown from "../../images/arrow-down.svg";
import { useState } from "react";

interface IDropdown {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

const DropDown: React.FC<IDropdown> = ({ children, className, title }) => {
  const [isShowMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!isShowMenu);
  };
  return (
    <div className={"relative w-full md:w-fit " + className}>
      <div
        className="py-3 px-5 bg-secondary-background border-secondary-background-accent flex md:gap-2.5 justify-between w-full rounded-md"
        onClick={handleShowMenu}
      >
        <p className="text-secondary font-semibold text-base">{title}</p>
        <Image src={ArrowDown} width={12} height={8} alt="arrowDown" />
      </div>
      {!!isShowMenu && children}
    </div>
  );
};

export default DropDown;
