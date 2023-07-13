import React from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => (
  <div className="bg-background">
    <div className="relative z-50 p-[100px] bg-background max-w-[1440px] mx-auto">
      <TopBar />
      {children}
      <Footer />
    </div>
  </div>
);

export default MainLayout;
