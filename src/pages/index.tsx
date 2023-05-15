import { type NextPage } from "next";
import Link from "next/link";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { UserButton, useAuth } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const {data, isLoading} = api.example.getAllUser.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SignedIn>
        <div>This content is visible only to signed in users.</div>
        {isLoaded && userId && (
          <>
            <h2>Logged in as {userId}</h2>
            <UserButton afterSignOutUrl="http://localhost:3000" />
          </>
        )}
      </SignedIn>
      <SignedOut>
        {/* 
              Route matches, but no user is signed in. 
              Redirect to the sign in page.
            */}

        <RedirectToSignIn />
      </SignedOut>

      {data?.map((db_user) => (
        <div key={db_user.id}>{db_user.email}</div>
      ))}
    </>
  );
};

export default Home;
