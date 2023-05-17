import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";
import { LoadingSpinner } from "~/components/loading";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading } = api.example.getAllUser.useQuery();
  const { user } = useUser();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <SignedIn>
        <div>This content is visible only to signed in users.</div>
        {isLoaded && userId && (
          <>
            <h2>Logged in as {userId}</h2>
            {user && (
              <>
              <Image
                src={user?.profileImageUrl}
                alt="User Profile"
                width={200}
                height={200}
              ></Image>
              <span>user.profileImageUrl</span>
              </>
            )}
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

      <Link href="/test" className="bg-black text-white p-1">Link to lovelist page</Link>

      {data?.map((db_user) => (
        <div key={db_user.id}>{db_user.email}</div>
      ))}
    </>
  );
};

export default Home;
