import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Header from "../components/navbar";


const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
        <Head>
          <title>Groops</title>
          <meta name="description" content="Groops" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
