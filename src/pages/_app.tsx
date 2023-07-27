import { NextPage } from "next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { IsSsrMobileContext } from "../utils/hooks/useIsMobile";

import "../globals.css";
import "../styles/custom.css";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  hasNoLayout?: boolean;
};

const poppins = localFont({
  src: [
    {
      path: "./_fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./_fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "./_fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./_fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "./_fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-poppins",
});

const MyApp: NextPage<AppProps<{ isSsrMobile: boolean }>> = ({
  Component,
  pageProps,
}) => {
  return (
    <IsSsrMobileContext.Provider value={pageProps.isSsrMobile}>
      <main className={`${poppins.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </IsSsrMobileContext.Provider>
  );
};

export default MyApp;
