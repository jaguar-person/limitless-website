import { NextPage } from "next";
import Image from "next/image";

import Hero from "./hero";
import Servers from "./servers";
import Shop from "./shop";
import BackgroundImage from "../../images/background.svg";

const Dashboard: NextPage = () => {
  return (
    <div>
      <Image
        src={BackgroundImage}
        width={2134}
        height={1423}
        className="hidden md:block absolute left-0 -top-16  z-20"
        alt="background"
      />
      <div className="hero pt-[197px]">
        <Hero />
      </div>
      <div className="server mt-[337px]">
        <Servers />
      </div>
      <div className="shop my-[130px] px-[115px]">
        <Shop />
      </div>
    </div>
  );
};

export default Dashboard;
