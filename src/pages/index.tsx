import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";
import { LoadingSpinner } from "~/components/loading";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { isLoaded: userLoaded, userId, sessionId, getToken } = useAuth();
  const { data: userData, isLoading: loadingData } = api.example.getAllUser.useQuery();
  const { user } = useUser();

  if (loadingData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      <SignedIn>
        <div>This content is visible only to signed in users.</div>
        {userLoaded && userId && (
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

      <Link href="/test" className="bg-black p-1 text-white">
        Link to lovelist page
      </Link>

      {userData?.map((db_user) => (
        <div key={db_user.id}>{db_user.email}</div>
      ))}
    </>
  );
};

export default Home;
