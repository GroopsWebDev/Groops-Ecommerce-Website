import Cross from "@public/assets/icons/cross.svg";
import Account from "@public/assets/icons/account.svg";
import Groups from "@public/assets/icons/groups.svg";
import Orders from "@public/assets/icons/orders.svg";
import Heart from "@public/assets/icons/heart.svg";
import Logout from "@public/assets/icons/logout.svg";
import Slide from "@mui/material/Slide";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
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
      <Cross />
    </button>
  );

  const sidebarRef = useRef<HTMLDivElement | null>(null);

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
          <div className="h-full bg-white text-gray-700 shadow-2xl">
            <CrossButton />

            <div className="flex flex-col items-center bg-rose-600">
              {/* <img
                src="/assets/dummy/product.png"
                className="mt-10 w-1/2 rounded-full"
              /> */}

              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonBox:"mt-10",
                      userButtonAvatarBox: "w-36 h-36",
                    },
                  }}
                />
              </SignedIn>
              <h2 className="mt-5 text-2xl font-bold text-white">
                First Name . L
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
                <p className="ml-2">Logout</p>
              </Link>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Sidebar;
