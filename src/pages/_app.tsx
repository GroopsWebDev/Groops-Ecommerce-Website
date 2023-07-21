import { type AppType } from "next/app";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

import { useRouter } from "next/router";

import { api } from "~/utils/api";
import { appWithTranslation } from "next-i18next";

import "~/styles/globals.css";

import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

const publicPages: Array<string> = ["/", "/demo/about"];

const MyApp: AppType = ({ Component, pageProps }) => {
  const { pathname } = useRouter();
  const isPublicPage = publicPages.includes(pathname);

  return (
    <ClerkProvider {...pageProps}>
      {isPublicPage ? (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : (
        <>
          <SignedIn>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn redirectUrl='/sign-in' afterSignInUrl='/' afterSignUpUrl='/'/>
          </SignedOut>
        </>
      )}
    </ClerkProvider>
  );
};

export default api.withTRPC(appWithTranslation(MyApp));
