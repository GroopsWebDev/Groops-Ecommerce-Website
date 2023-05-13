import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import { UserButton, useAuth, UserProfile } from "@clerk/nextjs";
import SignUpPage from "./clerk-auth/sign-up";
import SignInPage from "./clerk-auth/sign-in";

const Home: NextPage = () => {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const hello = trpc.example.hello.useQuery({ text: "from TRPC client" }); // this is a hook that sends a query to the server (server/src/rpc/example.ts)
  const users = trpc.example.getAllUser.useQuery();

  return (
    <>
      <h1>Home</h1>
      {!userId && (
        <>
          <SignUpPage />
          <SignInPage />
        </>
      )}
      {isLoaded && userId && (
        <>
          <h2>Logged in as {userId}</h2>
          <UserButton afterSignOutUrl="http://localhost:3000" />
        </>
      )}
      <h2>{hello.data?.greeting ?? "Loading trpc query..."}</h2>

      {users.data?.map((user) => (
        <div key={user.id}>{user.email}</div>
      ))}
    </>
  );
};

export default Home;
