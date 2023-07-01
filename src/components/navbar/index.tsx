import { useState } from "react";
import Logo from "@public/assets/navbar/logo.svg";
import Menu from "@public/assets/navbar/menu.svg";
import Link from "next/link";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [showSide, setShowSide] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-white">
      <header className="flex flex-row items-center justify-between p-3">
        <button
          className="ml-5"
          onClick={() => {
            setShowSide(!showSide);
            console.log(showSide);
          }}
        >
          <Menu />
        </button>

        <Sidebar showSide={showSide} setShow={setShowSide} />

        <Link href="/">
          <Logo className="ml-5" />
        </Link>

        <input
          placeholder="Search..."
          className="ml-10 w-1/2 rounded-lg border border-gray-300 px-4 py-2 outline-0"
          id="search"
        />

        <button className="ml-3 rounded-lg bg-rose-600 px-5 py-2 text-white">
          Search
        </button>

        <Link href="/group" className="flex">
          <div className="ml-10">
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
          </div>

          <p className="ml-2">Groups</p>
        </Link>

        <div className="ml-5">
          <Link href="/demo/about">
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
          </Link>
        </div>

        <p className="ml-0">English</p>

        <div className="ml-0">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
              fill="#374151"
            />
          </svg>
        </div>

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
        <p className="ml-0 mr-5">Cart</p>
      </header>

      <div className="flex flex-row items-center justify-between p-3 pl-20 pr-20 shadow-md">
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
