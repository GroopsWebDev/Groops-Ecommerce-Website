import React, { useState, useRef } from "react";
//next js
import { useRouter } from "next/router";
import Link from "next/link";
//SVG
import GroopLogo from "../../public/assets/groop-logo.svg";
import 文 from "../../public/assets/文.svg";
import NavPerson from "../../public/assets/nav-person.svg";
import NavCart from "../../public/assets/nav-cart.svg";
import NavSearch from "../../public/assets/nav-search.svg";
import NavHeart from "../../public/assets/nav-heart.svg";
//nextAuth
import { signIn, signOut, useSession } from "next-auth/react";
//`react-confirm-alert`
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

const Header = () => {
  const { data: sessionData } = useSession();
  const [showOverlay, setShowOverlay] = useState(false); //ref for overlay
  const target = useRef(null); //ref for overlay
  const { push } = useRouter();

  const logout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="rounded-md border-2 border-black bg-white">
            <div className="m-4">
              <h1>Are you sure to log out?</h1>
              <p>You will be logged out from your account.</p>
              <Button className="w-[90px]" variant="success" onClick={onClose}>
                No
              </Button>
              <Button
                className="ml-10"
                variant="outline-danger"
                onClick={handleSignOut} //testing
              >
                Log Out
              </Button>
            </div>
          </div>
        );
      },
    });
  };

  //signout redirect function
  const handleSignOut = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: "/home",
    });
    push(data.url);
  };

  const handleSignIn = () => {
    console.log("handleSignIn");
    push("/auth/signin");
  };

  return (
    <>
      {sessionData ? (
        <>
          {/* IF YOU ARE LOGGED IN, YOU WILL SEE THE MEMBER NAVBAR */}
          <header className="sticky top-0 z-10 bg-white shadow">
            <div className="container mx-auto flex justify-between p-6 xl:max-w-screen-xl">
              <Link href="/">
                <GroopLogo className="w-full" />
              </Link>
              <div className="flex items-center space-x-7">
                <Link
                  href="/"
                  className="text-xl font-medium text-black no-underline"
                >
                  HOME
                </Link>
                <Link
                  href="/product"
                  className="text-xl font-medium text-black no-underline"
                >
                  SHOP
                </Link>
                <Link
                  href="/member/group-order"
                  className="text-xl font-medium text-black no-underline"
                >
                  GROUP ORDER
                </Link>
                <文 className="w-7" />
                <NavSearch className="w-7" />
                <NavHeart className="w-7" />
                <NavCart className="w-7" />
                <NavPerson className="w-7" />
              </div>
            </div>
          </header>
        </>
      ) : (
        <>
          {/* IF YOU ARE NOT LOGGED IN, YOU WILL SEE THE GUEST NAVBAR */}
          <header className="sticky top-0 z-10 bg-white shadow">
            <div className="container mx-auto flex justify-between p-6 xl:max-w-screen-xl">
              <Link href="/">
                <GroopLogo className="w-full" />
              </Link>
              <div className="flex items-center space-x-7">
                <Link
                  href="/"
                  className="text-xl font-medium text-black no-underline"
                >
                  HOME
                </Link>
                <Link
                  href="/product"
                  className="text-xl font-medium text-black no-underline"
                >
                  SHOP
                </Link>
                <Link
                  href="/member/group-order"
                  className="text-xl font-medium text-black no-underline"
                >
                  GROUP ORDER
                </Link>
                <文 className="w-7" />
                <NavSearch className="w-7" />
                <NavHeart className="w-7" />
                <Link href="/member/cart">
                <NavCart className="w-7" />
                </Link>
                <NavPerson className="w-7" onClick={handleSignIn}/>
              </div>
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
