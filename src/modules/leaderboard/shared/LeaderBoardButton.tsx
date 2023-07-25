import React, { MouseEventHandler } from "react";
import Image from "next/image";
import RightIcon from "../../../images/arrow-right--black.svg";

interface ILeaderBoardButton {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const LeaderBoardButton: React.FC<ILeaderBoardButton> = ({ name, onClick }) => (
  <button
    className="flex justify-between py-3 px-5 bg-gems items-center rounded-md w-full transform transition-transform active:scale-y-75 duration-200"
    onClick={onClick}
  >
    <p className="text-background font-bold text-base capitalize">
      Show {name}
    </p>
    <Image
      src={RightIcon}
      width={20}
      height={20}
      alt="icon"
      className="w-5 h-5"
    />
  </button>
);

export default LeaderBoardButton;
