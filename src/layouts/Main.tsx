import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import TopBar from "./TopBar";
import Footer from "./Footer";

export type ScrollContextValue = {
  isScroll: boolean;
  setScroll: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ScrollContext = createContext<ScrollContextValue>({
  isScroll: false,
  setScroll: () => {},
});

interface IMainLayout {
  children: React.ReactNode;
}

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  const [isScroll, setScroll] = useState(false);
  const handleScroll = () => {
    setScroll(true);
  };
  return (
    <ScrollContext.Provider value={{ isScroll, setScroll }}>
      <div
        className="bg-background overflow-y-auto max-h-[835px] md:max-h-full"
        onScroll={handleScroll}
      >
        <div className="relative xl:px-[100px] md:py-[88px] py-6 px-4 bg-background md:max-w-[1440px] mx-auto w-full">
          <TopBar />
          {children}
          <Footer />
        </div>
      </div>
    </ScrollContext.Provider>
  );
};

export default MainLayout;
