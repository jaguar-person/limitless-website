import { NextPage } from "next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

import "../globals.css";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  hasNoLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    user?: unknown;
  };
};

const poppins = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-poppins",
});

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
