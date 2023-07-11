import { NextPage } from "next";
import Image from "next/image";

import TobBar from "../layouts/TopBar";
import Footer from "../layouts/Footer";
import Hero from "../modules/dashboard/hero";
import Servers from "../modules/dashboard/servers";
import Shop from "../modules/dashboard/shop";
import MainLayout from "../layouts/Main";
import BackgroundImage from "../images/background.svg";

const Dashboard: NextPage = () => {
  return (
    <MainLayout>
      <Image
        src={BackgroundImage}
        width={2134}
        height={1423}
        className="absolute -top-16  z-20"
        alt="background"
      />
      <div className="hero mt-[197px]">
        <Hero />
      </div>
      <div className="server mt-[337px]">
        <Servers />
      </div>
      <div className="shop my-[130px] px-[115px]">
        <Shop />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
