import { type AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import Navbar from "~/components/basics/navbar";
import Footer from "~/components/basics/footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
