import { createContext, useContext, useState, useEffect } from "react";
import MobileDetect from "mobile-detect";
import { GetServerSidePropsContext } from "next";

export const IsSsrMobileContext = createContext(false);

export const getIsSsrMobile = (context: GetServerSidePropsContext) => {
  const md = new MobileDetect(context.req.headers["user-agent"] as string);

  return Boolean(md.mobile());
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export const useIsMobile = () => {
  const isSsrMobile = useContext(IsSsrMobileContext);
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 992;

  return isSsrMobile || isBrowserMobile;
};
