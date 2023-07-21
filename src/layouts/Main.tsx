import React from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => (
  <div className="bg-background overflow-hidden">
    <div className="relative xl:px-[100px] md:py-[88px] py-6 px-4 bg-background md:max-w-[1440px] mx-auto w-full">
      <TopBar />
      {children}
      <Footer />
    </div>
  </div>
);

export default MainLayout;
