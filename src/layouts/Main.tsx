import React from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => (
  <div className="bg-background">
    <div className="relative z-50 md:px-[100px] md:py-[88px] py-6 pb-[88px] px-4 bg-background md:max-w-[1440px] mx-auto w-fit">
      <TopBar />
      {children}
      <Footer />
    </div>
  </div>
);

export default MainLayout;
