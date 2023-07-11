import Image from "next/image";
import ArrowDown from "../../images/arrow-down.svg";
import { useState } from "react";

const DropDown = () => {
  const gameModes = [
    "All Servers",
    "Quad Monthly",
    "Low Pop",
    "Main Monthly",
    "Trio Weekly",
  ];
  const [isShowMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!isShowMenu);
  };
  return (
    <div className="relative">
      <div
        className="btn-custom-initial bg-secondary-background border-secondary-background-accent"
        onClick={handleShowMenu}
      >
        <p className="text-secondary font-semibold text-base">Game Modes</p>
        <Image src={ArrowDown} width={12} height={8} alt="arrowDown" />
      </div>
      {!!isShowMenu && (
        <div className="mt-2.5 right-0 absolute rounded-md bg-secondary-background flex flex-col pl-2.5 w-[190px] ">
          {gameModes.map((mode) => (
            <div className="flex gap-2 border-b  py-2 border-secondary-background-accent items-center">
              <input type="checkbox" className="w-3.5 h-3.5" />
              <p className="text-secondary">{mode}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
