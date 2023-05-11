import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";
import { UserButton, useAuth, UserProfile } from "@clerk/nextjs";
import SignUpPage from "./clerk-auth/sign-up";
import SignInPage from "./clerk-auth/sign-in";

const Home: NextPage = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  return (
    <>
      <h1>Home</h1>

      {!userId  &&  <>
          <SignUpPage />
          <SignInPage />
        </> }

        {isLoaded && userId  &&  <>
          <h2>Logged in as {userId}</h2>
          <UserButton afterSignOutUrl="http://localhost:3000"/>
        </> }

    </>
  );
};

export default Home;
