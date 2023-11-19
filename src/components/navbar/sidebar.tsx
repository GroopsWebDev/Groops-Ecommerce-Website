import Cross from "@public/assets/icons/cross.svg";
import Account from "@public/assets/icons/account.svg";
import Groups from "@public/assets/icons/groups.svg";
import Orders from "@public/assets/icons/orders.svg";
import Heart from "@public/assets/icons/heart.svg";
import Logout from "@public/assets/icons/logout.svg";
import Slide from "@mui/material/Slide";

import Link from "next/link";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

const Sidebar = ({
  showSide,
  setShow,
}: {
  showSide: boolean;
  setShow: (show: boolean) => void;
}) => {
  const CrossButton = () => (
    <button className="absolute right-5 top-5" onClick={() => setShow(false)}>
      <Cross className="text-white" />
    </button>
  );

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    let handler = (e: any) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <>
      <Slide in={showSide} direction="right" timeout={{ enter: 500 }}>
        <div
          className="fixed bottom-0 left-0 top-0 z-50 w-1/5"
          ref={sidebarRef}
        >
          <div className="h-full bg-white text-gray-700 shadow-xl">
            <CrossButton />
            {user ? (
              <div>
                <div className="flex flex-col items-center bg-gradient-to-r from-primary-main  to-primary-dark">
                  <Image
                    src={user!.profileImageUrl}
                    alt="clerk user.imageUrl"
                    width={100}
                    height={100}
                    className="mt-8 h-32 w-32 rounded-full"
                  />
                  <h2 className="mt-5 text-2xl font-bold text-white">
                    {user!.firstName
                      ? user!.firstName + user!.lastName?.charAt(0)
                      : user!.username}
                  </h2>
                  <div className="mb-5 mt-5 w-[95%] rounded-xl bg-white p-5">
                    <p className="text-2xl font-bold text-rose-600">$ 135</p>
                    <p className="text-gray-400">Savings last 12 months</p>
                  </div>
                </div>
                <div className="mt-10 flex h-full flex-col gap-y-6 pl-5 text-gray-700">
                  <Link className="flex items-center" href="/account/1">
                    <Account />
                    <p className="ml-2">Your Account</p>
                  </Link>

                  <Link
                    className="flex items-center"
                    href="/account/user-profile"
                  >
                    <p className="ml-2">Your Account (Clerk)</p>
                  </Link>

                  <Link className="flex items-center" href="/order">
                    <Orders />
                    <p className="ml-2">Your Orders</p>
                  </Link>

                  <Link className="flex items-center" href="/group">
                    <Groups />
                    <p className="ml-2">Your Groups</p>
                  </Link>

                  <Link className="flex items-center" href="/lovelist">
                    <Heart className="w-5" />
                    <p className="ml-2">Your LoveList</p>
                  </Link>

                  <Link className="flex items-center" href="/">
                    <Logout />
                    <SignOutButton>
                      <p className="ml-2">Logout</p>
                    </SignOutButton>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center bg-white">
                <UserCircleIcon
                  className="mt-8 h-32 w-32 text-gray-300"
                  aria-hidden="true"
                />
                <SignInButton mode="modal">
                  <button className="btn">Sign in</button>
                </SignInButton>
              </div>
            )}
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Sidebar;
