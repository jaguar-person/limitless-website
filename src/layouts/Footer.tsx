import React from "react";
import Image from "next/image";
import DiscordIcon from "../images/discord.svg";
const Footer = () => (
  <div className="flex flex-col md:flex-row gap-9 md:gap-0 md:justify-between items-center absolute bottom-10 left-0 w-full md:px-[100px] pt-10 border-t-black border-t">
    <div className=" text-lg leading-3 text-[#8078A9]">
      Copyright © 2023 Limitless LLC.
    </div>
    <div className="cursor-pointer p-3 rounded-md bg-info flex gap-2">
      <Image src={DiscordIcon} width={34} height={26} alt="discord" />
      <p className="font-bold text-base text-white">JOIN OUR DISCORD</p>
    </div>
  </div>
);

export default Footer;
