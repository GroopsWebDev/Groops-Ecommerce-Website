import React, { useState, useRef } from "react";
//next js
import { useRouter } from "next/router";
import Link from "next/link";
//SVG
import GroopLogo from "../../public/assets/navbar/groop-logo.svg";
import 文 from "../../public/assets/navbar/文.svg";
import NavPerson from "../../public/assets/navbar/nav-person.svg";
import NavCart from "../../public/assets/navbar/nav-cart.svg";
import NavSearch from "../../public/assets/navbar/nav-search.svg";
import NavHeart from "../../public/assets/navbar/nav-heart.svg";
//nextAuth
import { signIn, signOut, useSession } from "next-auth/react";
//react-confirm-alert
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
//react-bootstrap
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
//component
import NavbarSignInBtn from "./elements/navbar-signin-btn";
import ShoppingCartPopUp from "./shoppingCart/shoppingCartPopup";

const Header = () => {
  const { data: sessionData } = useSession();
  const [showOverlay, setShowOverlay] = useState(false); //ref for overlay
  const [target, setTarget] = useState(null); //target for overlay
  const ref = useRef(null); //ref for overlay
  const { push, asPath } = useRouter();
  const firstName = sessionData?.user?.name?.split(" ")[0];
  const url = "/member/shoppingCart";
  const navbar_text_item_style =
    "text-xl font-medium text-black no-underline transform transition duration-300 hover:scale-110";
  const navbar_icon_item_style =
    "w-7 text-black transform transition duration-300 hover:scale-110 hover:cursor-pointer";
  const user_img = sessionData?.user?.image ? sessionData?.user?.image : null;
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMouseOverCartPopup, setIsMouseCartOverPopup] = useState(false);
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
                onClick={() => {
                  handleSignOut();
                  onClose();
                }} //testing
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

  const onMouseEnterCartPopup = () => {
    setIsMouseCartOverPopup(true);
  };

  const onMouseLeaveCartPopup = () => {
    setIsMouseCartOverPopup(false);
  };

  const onClickPerson = (event: any) => {
    setShowOverlay(!showOverlay);
    setTarget(event.target);
  };

  const onMouseEnterPerson = (event: any) => {
    setShowOverlay(true);
    setTarget(event.target);
  };

  const onMouseLeavePerson = (event: any) => {
    setShowOverlay(false);
  };

  return (
    <>
      {sessionData ? (
        <>
          {/* IF YOU ARE LOGGED IN, YOU WILL SEE THE MEMBER NAVBAR */}
          <header className="sticky top-0 z-10 bg-white">
            <div className="container mx-auto flex justify-between p-6 xl:max-w-screen-xl">
              <Link href="/">
                <GroopLogo className="w-full" />
              </Link>
              <div className="flex items-center space-x-7">
                <Link href="/" className={navbar_text_item_style}>
                  HOME
                </Link>
                <Link href="/product" className={navbar_text_item_style}>
                  SHOP
                </Link>
                {sessionData && (
                  <Link href="/group" className={navbar_text_item_style}>
                    GROUP ORDER
                  </Link>
                )}
                <Link href="/">
                  <文 className={navbar_icon_item_style} />
                </Link>
                <Link href="/">
                  <NavSearch className={navbar_icon_item_style} />
                </Link>
                <Link href="/">
                  {sessionData && (
                    <NavHeart className={navbar_icon_item_style} />
                  )}
                </Link>
                <Link href="/member/shoppingCart">
                  {sessionData && (
                    <div onMouseEnter={() => setIsCartOpen(true)}>
                      <NavCart className={navbar_icon_item_style} />
                    </div>
                  )}
                </Link>

                {/* <ShoppingCartPopUp /> */}
                {isCartOpen && (
                  <ShoppingCartPopUp
                    isOpen={isCartOpen || isMouseOverCartPopup}
                    onClose={() => setIsCartOpen(false)}
                    onMouseEnter={onMouseEnterCartPopup}
                    onMouseLeave={onMouseLeaveCartPopup}
                  />
                )}
                {/* Login Person Icon */}
                <div ref={ref}>
                  <div
                    // onMouseEnter={onMouseEnterPerson}
                    onClick={onClickPerson} //fix code
                  >
                    {user_img ? (
                      <img
                        src={user_img}
                        className="w-10 rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <NavPerson className={navbar_icon_item_style} />
                    )}
                  </div>
                  <div onMouseLeave={onMouseLeavePerson}>
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
                          <div className="text-sm">
                            {sessionData.user?.email}
                          </div>
                        </Popover.Header>

                        <Popover.Body className="bg-gradient-to-br from-purple-500 to-pink-400 p-1">
                          <div className="h-full w-full bg-white ">
                            <Link
                              href="/member/userCenter"
                              className="ml-2 text-lg text-black no-underline hover:text-orange-500 hover:underline"
                            >
                              Account Setting
                            </Link>
                          </div>
                          <div className="h-full w-full bg-white ">
                            <Link
                              href="/profile/change-password"
                              className="ml-2 text-lg text-black no-underline hover:text-orange-500 hover:underline"
                            >
                              Change Password
                            </Link>
                          </div>
                          <div className="h-full w-full bg-white ">
                            {sessionData && (
                              <div
                                className="ml-2 text-lg text-black no-underline hover:text-red-500 hover:underline"
                                onClick={() => {
                                  logout();
                                }}
                              >
                                Sign Out
                              </div>
                            )}
                          </div>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </div>
                </div>
                <div>
                  Hello,
                  <span className="bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-lg text-transparent">
                    {firstName}
                  </span>
                  !
                </div>
              </div>
            </div>
          </header>
        </>
      ) : (
        <>
          {/* IF YOU ARE NOT LOGGED IN, YOU WILL SEE THE GUEST NAVBAR */}
          <header className="sticky top-0 z-10 bg-white">
            <div className="container mx-auto flex justify-between p-6 xl:max-w-screen-xl">
              <Link href="/">
                <GroopLogo className="w-full" />
              </Link>
              <div className="flex items-center space-x-7">
                <Link href="/" className={navbar_text_item_style}>
                  HOME
                </Link>
                <Link href="/product" className={navbar_text_item_style}>
                  SHOP
                </Link>
                <Link href="/group" className={navbar_text_item_style}>
                  GROUP ORDER
                </Link>
                <文 className={navbar_icon_item_style} />

                <NavSearch className={navbar_icon_item_style} />

                {sessionData ? (
                  <Link href={url}>
                    <NavCart className="w-7" />
                  </Link>
                ) : (
                  ""
                )}
                <Link href="/login">
                  {/* <div className="">  Sign in</div> */}
                  <NavbarSignInBtn />
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
