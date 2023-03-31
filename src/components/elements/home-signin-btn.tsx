import React from "react";

const HomeSignInButton = () => {
  return (
    <div>
      <a
        className="no-underline text-2xl group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white px-6 py-3 pt-2 pb-2 pl-14 pr-14 shadow-md transition duration-300 ease-out"
      >
        <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 text-white duration-300 group-hover:translate-x-0">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="ease absolute flex h-full w-full transform items-center justify-center text-white transition-all duration-300 group-hover:translate-x-full">
          Sign In
        </span>
        <span className="invisible relative">Sign In</span>
      </a>
    </div>
  );
};

export default HomeSignInButton;
