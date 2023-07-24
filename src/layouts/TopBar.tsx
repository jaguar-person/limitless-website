import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import LogoIcon from "../images/logo.svg";
import User from "../components/user";
import Menu from "../components/menu";
import { ROUTING_PATH } from "../utils/constants";
import Nav from "../modules/shared/nav";

const TopBar: React.FC = () => {
  const router = useRouter();
  const currentPathName = router.pathname;

  return (
    <div className="flex justify-between items-center relative z-30">
      <Image
        src={LogoIcon}
        alt="My image"
        width={64}
        height={64}
        className="hidden md:block"
        onClick={() => {
          router.push(ROUTING_PATH.DASHBOARD);
        }}
      />
      <Image
        src={LogoIcon}
        alt="My image"
        width={32}
        height={32}
        className="block md:hidden"
        onClick={() => {
          router.push(ROUTING_PATH.DASHBOARD);
        }}
      />
      <div className="hidden md:block">
        <Nav currentPathName={currentPathName} />
      </div>
      <div className="hidden md:block">
        <User />
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;
