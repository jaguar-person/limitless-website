import React from "react";
import Image from "next/image";
import ShopIcon from "../../../images/shop.svg";
import SiteIcon from "../../../images/site.svg";
import Decoration from "../../../components/decoration";

const Shop = () => (
  <div className="flex flex-col md:flex-row gap-6 md:gap-[60px]">
    <Image
      src={ShopIcon}
      width={352}
      height={333}
      alt="shop"
      className="w-full"
    />
    <div className="flex flex-col gap-2 md:gap-5 items-start py-6 md:py-10">
      <div className="flex gap-4 items-center">
        <Decoration color="points" />
        <p className="font-bold text-5xl md:text-[60px] md:leading-10 text-white">
          Shop
        </p>
      </div>
      <p className="text-[22px] leading-[33px] text-secondary">
        Purchase a package from our webstore, gain exclusive perks and show your
        support for our servers. Visit the webstore now!
      </p>
      <div className="btn-custom px-7 py-4 bg-points w-full my-4">
        <p className="text-background uppercase text-xl tracking-tighter font-extrabold">
          Visit Shop
        </p>
        <Image src={SiteIcon} width={20} height={20} alt="site" />
      </div>
    </div>
  </div>
);

export default Shop;
