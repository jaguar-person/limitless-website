import React from "react";
import Image from "next/image";
import USAIcon from "../../../images/usa.svg";

interface ISwitchIcon {
  flag: boolean;
  onSwitch: (flag: boolean) => (e: React.MouseEvent) => void;
}

const ServersSwitchUSA: React.FC<ISwitchIcon> = ({ flag, onSwitch }) => (
  <div
    className={
      "btn-custom !px-8 border " +
      (flag
        ? "bg-secondary-background border-secondary-background-accent"
        : "bg-[#702835] border-[#D80027]")
    }
    onClick={onSwitch(false)}
  >
    <Image src={USAIcon} width={35} height={35} alt="eurFlag" />
    <p className="font-semibold text-base text-secondary">America Servers</p>
  </div>
);

export default ServersSwitchUSA;
