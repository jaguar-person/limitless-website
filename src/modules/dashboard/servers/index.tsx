import React from "react";
import Image from "next/image";
import ServerCard from "../../../components/card";
import Decoration from "../../../components/decoration";
import SiteIcon from "../../../images/site.svg";
import Button from "../../../components/button";

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
    <Button
      name="explore servers"
      bgColor="info-light"
      className="py-5 w-full mt-2"
      rightIcon="site"
      size="xl"
    />
  </div>
);

export default Servers;
