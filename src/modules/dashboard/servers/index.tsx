import React from "react";
import Image from "next/image";
import ServerCard from "../../../components/card";
import Decoration from "../../../components/decoration";
import SiteIcon from "../../../images/site.svg";

const Servers = () => (
  <div className="text-center flex flex-col items-center gap-2 md:gap-9">
    <div className=" flex flex-col gap-2 py-3">
      <div className="flex flex-col gap-4 items-center">
        <Decoration color="gems" />
        <p className="font-bold text-5xl tracking-tighter text-white">
          Our Servers
        </p>
      </div>
      <div className="md:text-[20px] text-base text-center md:leading-[30px] text-secondary">
        <span>
          Discover Our Extensive Collection of High-Quality Rust Servers -
        </span>
        <span className="md:block inline">
          Connect Instantly with a Simple Click!
        </span>
      </div>
    </div>
    <div className="flex flex-col md:flex-row  gap-4 md:gap-2.5">
      <ServerCard />
      <ServerCard />
      <ServerCard />
    </div>
    <div className="btn-custom bg-cyan w-full text-xl mt-2 md:mt-0">
      <p className="text-background font-extrabold tracking-tighter uppercase">
        Explore Servers
      </p>
      <Image src={SiteIcon} width={20} height={20} alt="site" />
    </div>
  </div>
);

export default Servers;
