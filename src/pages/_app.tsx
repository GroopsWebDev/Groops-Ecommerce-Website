import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { api } from "../utils/api";
import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import Header from "../components/navbar";
import { store } from "../app/store";
import { Provider } from "react-redux";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Head>
          <title>Groops</title>
          <meta name="description" content="Groops" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        {/* {router.pathname === "/demo" && <Demo />} */}
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
