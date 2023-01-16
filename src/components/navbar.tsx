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
import Avatar from "../../public/assets/avatar.svg";
//nextAuth
import { signIn, signOut, useSession } from "next-auth/react";
//`react-confirm-alert`
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
//react-bootstrap
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { data: sessionData } = useSession();
  const [showOverlay, setShowOverlay] = useState(false); //ref for overlay
  const [target, setTarget] = useState(null); //target for overlay
  const ref = useRef(null); //ref for overlay
  const { push, asPath } = useRouter();
  const firstName = sessionData?.user?.name?.split(" ")[0];

  const logout = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="rounded-md border-2 border-black bg-white">
            <div className="m-4">
              <h1>Are you sure to sign out?</h1>
              <p>You will be logged out from your account.</p>
              <Button className="w-[90px]" variant="success" onClick={onClose}>
                Exit
              </Button>
              <Button
                className="ml-10"
                variant="outline-danger"
                onClick={()=>{
                  handleSignOut();
                  onClose();
                }
                } //testing
              >
                Sign Out
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
      callbackUrl: "/",
    });
    push(data.url);
  };

  const handleSignIn = () => {
    push(`/auth/signin?callbackUrl=${asPath}`);
  };

  const handleClick = (event:any) => {
    setShowOverlay(!showOverlay);
    setTarget(event.target);
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
                {/* Login Person Icon */}
                <div ref={ref}>
                  <div onClick={handleClick}>
                    <Avatar className="w-10" />
                  </div>

                  <Overlay
                    show={showOverlay}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={10}
                  >
                    <Popover id="popover-contained" className="text-center ">
                      <Popover.Header className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                        {sessionData.user?.name}
                        <div className="text-sm">{sessionData.user?.email}</div>
                      </Popover.Header>

                      <Popover.Body className="bg-gradient-to-br from-purple-500 to-pink-400 p-1">
                      <div className="bg-white h-full w-full ">
                          <Link
                            href="/member/account"
                            className="ml-2 text-lg text-black no-underline hover:text-orange-500 hover:underline"
                          >
                            Account Setting
                          </Link>
                        <div
                          className="ml-2 text-lg text-black no-underline hover:text-red-500 hover:underline"
                          onClick={() => {
                            logout();
                          }}
                        >
                          Sign Out
                        </div>
                        </div>
                      </Popover.Body>
               
                    </Popover>
                  </Overlay>
                </div>
                <div>Hello, <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">{firstName}</span> !</div>
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
                  href="/guest/group-order"
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
                <Link href="#">
                <NavPerson className="w-7" onClick={handleSignIn} />
                </Link>
              </div>
            </div>
          </header>
        </>
      )}
    </>
  );
};

export default Header;
