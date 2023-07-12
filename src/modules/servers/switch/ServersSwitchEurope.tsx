import React from "react";
import Image from "next/image";
import EURIcon from "../../../images/eur.svg";

interface ISwitchIcon {
  flag: boolean;
  onSwitch: (flag: boolean) => (e: React.MouseEvent) => void;
}

const ServersSwitchEurope: React.FC<ISwitchIcon> = ({ flag, onSwitch }) => (
  <div
    className={
      "btn-custom-initial !px-8 border " +
      (flag
        ? "bg-[#0052B4]/50 border-[#0052B4]"
        : "bg-secondary-background border-secondary-background-accent")
    }
    onClick={onSwitch(true)}
  >
    <Image src={EURIcon} width={35} height={35} alt="eurIcon" />
    <p className="font-semibold text-base text-white">Europe Servers</p>
  </div>
);

export default ServersSwitchEurope;
