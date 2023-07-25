import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import MobileMenuIcon from "../../images/mobile-menu.svg";
import MobileCloseIcon from "../../images/mobile-close.svg";
import AvatarIcon from "../../images/avatar.png";
import LogoIcon from "../../images/logo.svg";

import Footer from "../../layouts/Footer";
import Button from "../button";
import Nav from "../../modules/shared/nav";
import { ROUTING_PATH } from "../../utils/constants";
import { TicketsLogOutModal } from "../../modules/tickets/modals";

const Menu: React.FC = () => {
  const [isMenu, setMenu] = useState(false);
  const router = useRouter();
  const currentPathName = router.pathname;
  return (
    <div className="md:hidden block cursor-pointer">
      <Image
        src={isMenu ? MobileCloseIcon : MobileMenuIcon}
        width={32}
        height={32}
        alt="menu"
        onClick={() => {
          setMenu(!isMenu);
        }}
      />
      {!!isMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-background">
          <div className="flex justify-between py-6 px-4">
            <Image
              src={LogoIcon}
              alt="My image"
              width={32}
              height={32}
              className="block md:hidden cursor-pointer"
              onClick={() => {
                router.push(ROUTING_PATH.DASHBOARD);
              }}
            />
            <Image
              src={isMenu ? MobileCloseIcon : MobileMenuIcon}
              width={32}
              height={32}
              alt="menu"
              onClick={() => {
                setMenu(!isMenu);
              }}
            />
          </div>
          <div className="relative flex flex-col gap-14 mt-5 px-12 z-30">
            <Nav currentPathName={currentPathName} />
            <div className="flex flex-col gap-4 cursor-pointer">
              <div
                className="flex gap-4 items-center"
                onClick={() => {
                  router.push(ROUTING_PATH.ACCOUNTS);
                }}
              >
                <Image src={AvatarIcon} width={64} height={64} alt="Avatar" />
                <div className="flex flex-col gap-2">
                  <p className="text-white text-3xl">TripleZone</p>
                  <p className="text-secondary text-lg leading-5 font-bold">
                    PROFILE
                  </p>
                </div>
              </div>
              <TicketsLogOutModal />
            </div>
            <div className="absolute -bottom-48 left-0 w-full ">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
