import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";
import SignUpPage from "./clerk-auth/sign-up";
import { UserButton } from "@clerk/nextjs";
import SignInPage from "./clerk-auth/sign-in";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <h1>Home</h1>
      <UserButton />
      <SignUpPage />
      <SignInPage />
    </>
  );
};

export default Home;
