import React, { MouseEventHandler } from "react";
import Image from "next/image";
import ArrowLeftIcon from "../../images/arrow-left.svg";

interface ITitleArrow {
  title: string;
  size?: "md" | "lg";
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const TitleArrow: React.FC<ITitleArrow> = ({ title, size = "md", onClick }) => (
  <div className="flex gap-5 cursor-pointer" onClick={onClick}>
    <div className="py-2 px-3.5 flex items-center justify-center rounded-md bg-secondary-background border border-secondary-background-accent ">
      <Image src={ArrowLeftIcon} width={10} height={16} alt="arrow" />
    </div>
    <p
      className={
        "text-white leading-10 " +
        (size === "md" ? "text-[22px]" : "text-[28px] font-bold")
      }
    >
      {title}
    </p>
  </div>
);

export default TitleArrow;
