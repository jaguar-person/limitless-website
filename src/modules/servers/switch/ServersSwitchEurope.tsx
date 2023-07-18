import React from "react";
import Image from "next/image";
import { GetServerSidePropsContext } from "next";
import EURIcon from "../../../images/eur.svg";
import { getIsSsrMobile } from "../../../utils/hooks/useIsMobile";
import { useIsMobile } from "../../../utils/hooks/useIsMobile";
interface ISwitchIcon {
  flag: boolean;
  onSwitch: (flag: boolean) => (e: React.MouseEvent) => void;
}

const ServersSwitchEurope: React.FC<ISwitchIcon> = ({ flag, onSwitch }) => {
  const isMobile = useIsMobile();
  return (
    <div
      className={
        "btn-custom !px-8 border flex-1 md:flex-auto " +
        (flag
          ? "bg-[#0052B4]/50 border-[#0052B4]"
          : "bg-secondary-background border-secondary-background-accent")
      }
      onClick={onSwitch(true)}
    >
      <Image src={EURIcon} width={35} height={35} alt="eurIcon" />
      <p className="font-semibold text-base text-white">
        Europe {isMobile ? "" : "Servers"}{" "}
      </p>
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      isSsrMobile: getIsSsrMobile(context),
    },
  };
}

export default ServersSwitchEurope;
