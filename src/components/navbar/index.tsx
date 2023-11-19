import { useState } from "react";
import Logo from "@public/assets/navbar/logo.svg";
import Menu from "@public/assets/navbar/menu.svg";
import Link from "next/link";
import Sidebar from "./sidebar";
import Cart from "./cart";

const GroupsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z"
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LanguageIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 3H13M7 1V3M8.04819 12.5C6.52083 10.9178 5.28073 9.05645 4.41187 7M10.5 16H17.5M9 19L14 9L19 19M10.7511 3C9.78307 8.77022 6.06969 13.6095 1 16.129"
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
      stroke="#111111"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const [showSide, setShowSide] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-white">
      <header className="flex flex-row items-center justify-between px-5 pt-3">
        <button
          className=""
          onClick={() => {
            setShowSide(!showSide);
          }}
        >
          <Menu />
        </button>

        {showSide ? (
          <Sidebar showSide={showSide} setShow={setShowSide} />
        ) : null}

        {showCart || showSide ? (
          <div className="fixed left-0 top-0 z-10 h-screen w-screen bg-black opacity-50"></div>
        ) : null}

        <Link href="/">
          <Logo className="" />
        </Link>

        <div className="flex w-1/2 gap-x-3">
          <input
            placeholder="Search..."
            className="w-[90%] rounded-lg border border-gray-300 px-4 py-2 outline-0"
            id="search"
          />

          <button className="rounded-lg bg-primary-main px-12 py-2 text-white">
            Search
          </button>
        </div>

        <Link href="/group" className="flex gap-x-2">
          <GroupsIcon />
          <p className="">Groups</p>
        </Link>

        <Link href="/demo/about" className="flex gap-x-2">
          <LanguageIcon />
          <p className="">English</p>
        </Link>

        <button className="flex gap-x-2" onClick={() => setShowCart(true)}>
          <CartIcon />
          <p className="">Cart</p>
        </button>

        {showCart ? <Cart showCart={showCart} setShow={setShowCart} /> : null}
      </header>

      <div className="flex flex-row items-center justify-between p-3 px-20 shadow-md">
        <Link href="/">
          <p className="text-gray-600">Snacks</p>
        </Link>

        <Link href="/">
          <p className="text-gray-600">Candies</p>
        </Link>

        <Link href="/">
          <p className="text-gray-600">Instant Food</p>
        </Link>

        <Link href="/">
          <p className="text-gray-600">Personal Care</p>
        </Link>

        <Link href="/">
          <p className="text-gray-600">Beauty</p>
        </Link>

        <Link href="/">
          <p className="text-gray-600">Home & Life</p>
        </Link>
      </div>
    </div>
  );
}
