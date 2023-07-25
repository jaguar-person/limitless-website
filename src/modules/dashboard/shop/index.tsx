import React from "react";
import Image from "next/image";
import ShopIcon from "../../../images/shop.svg";
import Decoration from "../../../components/decoration";
import Button from "../../../components/button";

import { useIsMobile } from "../../../utils/hooks/useIsMobile";

const Shop: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-[60px]">
      <Image
        src={ShopIcon}
        width={352}
        height={333}
        alt="shop"
        className="w-full rounded-xl"
      />
      <div className="bg-bright"></div>
      <div className="flex flex-col gap-2 md:gap-5 items-start py-6 md:py-10">
        <div className="flex gap-4 items-center">
          <Decoration color="points" />
          <p className="font-bold text-5xl md:text-[60px] md:leading-10 text-white">
            Shop
          </p>
        </div>
        <p className="text-[22px] leading-[33px] text-secondary">
          Purchase a package from our webstore, gain exclusive perks and show
          your support for our servers. Visit the webstore now!
        </p>
        <a
          href="https://store.limitlessrust.com/category/all-packages"
          target="_blank"
          className="w-full md:w-fit"
        >
          <Button
            name="visit shop"
            bgColor="points"
            rightIcon="site"
            size="xl"
            width={isMobile ? "full" : "fit"}
          />
        </a>
      </div>
    </div>
  );
};

export default Shop;
