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
    <div className={"relative " + className}>
      <div
        className="btn-custom-initial bg-secondary-background-accent border-secondary-background flex justify-between"
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
