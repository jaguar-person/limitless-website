import React from "react";
import Image from "next/image";
import HeroIcon from "../../../images/hero.svg";
import MobileHeroIcon from "../../../images/mobile-hero.png";
import HeroButton from "./HeroButton";

const Hero: React.FC = () => {
  return (
    <div className=" flex flex-col">
      <div className="relative flex flex-col gap-5 md:gap-10 items-center md:items-start">
        <div className="relative md:absolute md:right-0 md:-top-24">
          <Image
            src={HeroIcon}
            width={460}
            height={530}
            alt="hero"
            className="hidden md:block"
          />
          <Image
            src={MobileHeroIcon}
            width={336}
            height={352}
            alt="hero"
            className="block md:hidden"
          />
        </div>
        <div className="font-bold text-center md:text-left md:leading-[84px] leading-[52px] md:text-[52px] xl:text-[66px] text-[46px] w-full md:w-[60%] text-white mb-3 md:mb-0">
          <span className="text-points">Limitless Rust</span> The Ultimate
          Experience
        </div>
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-10 relative z-20 w-full lg:w-[45%]">
          <HeroButton name="Shop" color="gems" />
          <HeroButton name="Join Discord" color="info" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
