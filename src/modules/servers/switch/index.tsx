import Image from "next/image";
import EURFlag from "../../../images/flag-eur.svg";
import USAFlag from "../../../images/flag-usa.svg";
import { useState } from "react";

const ServerSwitch = () => {
  const [switchFlag, setSwitchFlag] = useState(true);

  const handleClick = (flag: boolean) => (event: React.MouseEvent) => {
    setSwitchFlag(flag);
  };
  return (
    <div className="flex gap-2.5">
      <div
        className={
          "cursor-pointer py-3.5 px-8 rounded-md flex gap-5 items-center border " +
          (switchFlag
            ? "bg-[#0052B4]/50 border-[#0052B4]"
            : "bg-secondary-background border-secondary-background-accent")
        }
        onClick={handleClick(true)}
      >
        <Image src={EURFlag} width={35} height={35} alt="eurFlag" />
        <p className="font-semibold text-base text-white">Europe Servers</p>
      </div>
      <div
        className={
          "cursor-pointer py-3.5 px-8 rounded-md flex gap-5 items-center border " +
          (switchFlag
            ? "bg-secondary-background border-secondary-background-accent"
            : "bg-[#702835] border-[#D80027]")
        }
        onClick={handleClick(false)}
      >
        <Image src={USAFlag} width={35} height={35} alt="eurFlag" />
        <p className="font-semibold text-base text-secondary">
          America Servers
        </p>
      </div>
    </div>
  );
};

export default ServerSwitch;
