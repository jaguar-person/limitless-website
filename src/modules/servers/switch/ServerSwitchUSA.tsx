import React from "react";
import Image from "next/image";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";
import USAIcon from "../../../images/usa.svg";

interface ISwitchIcon {
  flag: boolean;
  onSwitch: (flag: boolean) => (e: React.MouseEvent) => void;
}

const ServersSwitchUSA: React.FC<ISwitchIcon> = ({ flag, onSwitch }) => {
  const isMobile = useIsMobile();
  return (
    <div
      className={
        "btn-custom !px-8 border flex-1 md:flex-auto " +
        (flag
          ? "bg-secondary-background border-secondary-background-accent"
          : "bg-[#702835] border-[#D80027]")
      }
      onClick={onSwitch(false)}
    >
      <Image src={USAIcon} width={35} height={35} alt="eurFlag" />
      <p className="font-semibold text-base text-white">
        America {isMobile ? "" : "Servers"}{" "}
      </p>
    </div>
  );
};

export default ServersSwitchUSA;
