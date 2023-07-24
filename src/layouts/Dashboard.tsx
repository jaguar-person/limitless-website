import React from "react";
import Image from "next/image";
import BackgroundImage from "../images/background.svg";

interface IDashBoardLayout {
  children: React.ReactNode;
}

const DashBoardLayout: React.FC<IDashBoardLayout> = ({ children }) => (
  <div className="relative">
    <Image
      src={BackgroundImage}
      width={2134}
      height={1423}
      className="hidden md:block absolute left-0 w-full -top-16  z-20"
      alt="background"
    />
    {children}
  </div>
);

export default DashBoardLayout;
