import React from "react";
import Image from "next/image";
import HeroIcon from "../../../images/hero.svg";
import Button from "../../../components/button";

const Hero = () => (
  <div className=" flex flex-col">
    <div className="relative flex flex-col gap-5 md:gap-10">
      <Image
        src={HeroIcon}
        width={460}
        height={530}
        alt="hero"
        className="relative md:absolute md:right-0 md:-top-24"
      />
      <div className="font-bold text-center md:text-left md:leading-[84px] leading-[52px] md:text-[66px] text-[46px] w-full md:w-[60%] text-white mb-3 md:mb-0">
        <span className="text-points">Limitless Rust</span> The Ultimate
        Experience
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:gap-10 relative z-30 w-full md:w-[45%]">
        <Button name="shop" size="xl" className="py-6 flex-1" />
        <Button
          name="Join Discord"
          size="xl"
          className="py-6 flex-1"
          bgColor="info"
        />
      </div>
    </div>
  </div>
);

export default Hero;
