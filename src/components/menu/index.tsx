import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import MobileMenuIcon from "../../images/mobile-menu.svg";
import MobileCloseIcon from "../../images/mobile-close.svg";
import NavItem from "../nav-item";
import AvatarIcon from "../../images/avatar.png";

import { ROUTING_PATH } from "../../utils/constants";
import Footer from "../../layouts/Footer";
import Button from "../button";

const Menu: React.FC = () => {
  const [isMenu, setMenu] = useState(false);
  const router = useRouter();
  const currentPathName = router.pathname.split("/")[1];
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
        <div className="fixed top-16 left-0 w-full h-full bg-background">
          <div className="relative flex flex-col gap-14 mt-10 px-12 z-30">
            <div className="flex flex-col gap-8">
              <NavItem
                path={ROUTING_PATH.LEADERBOARD}
                isCurrentPath={currentPathName === ROUTING_PATH.LEADERBOARD}
              >
                Leaderboard
              </NavItem>
              <NavItem>Support</NavItem>
              <NavItem>Shop</NavItem>
              <NavItem
                path={ROUTING_PATH.TICKETS}
                isCurrentPath={currentPathName === ROUTING_PATH.TICKETS}
              >
                My Tickets
              </NavItem>
              <NavItem
                path={ROUTING_PATH.SERVERS}
                isCurrentPath={currentPathName === ROUTING_PATH.SERVERS}
              >
                Servers
              </NavItem>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <Image src={AvatarIcon} width={64} height={64} alt="Avatar" />
                <div className="flex flex-col gap-2">
                  <p className="text-white text-3xl">TripleZone</p>
                  <p className="text-secondary text-lg leading-5 font-bold">
                    PROFILE
                  </p>
                </div>
              </div>
              <Button name="Log Out" bgColor="danger" width="full" />
            </div>
            <div className="absolute -bottom-56 left-0 w-full ">
              <Footer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
