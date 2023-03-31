import React from "react";

const NavbarSignInBtn = () => {
  return (
    <>
      <a className="no-underline group relative inline-block rounded px-5 py-2.5 font-medium font-medium text-white no-underline">
        <span className="absolute top-0 left-0 h-full w-full rounded bg-gradient-to-br from-purple-600 to-blue-500 opacity-50 blur-sm filter"></span>
        <span className="absolute inset-0 mt-0.5 ml-0.5 h-full w-full rounded bg-gradient-to-br from-purple-600 to-blue-500 opacity-50 filter group-active:opacity-0"></span>
        <span className="absolute inset-0 h-full w-full rounded bg-gradient-to-br from-purple-600 to-blue-500 shadow-xl filter transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0"></span>
        <span className="absolute inset-0 h-full w-full rounded bg-gradient-to-br from-blue-500 to-purple-600 transition duration-200 ease-out"></span>
        <span className="relative">Sign In</span>
      </a>
    </>
  );
};

export default NavbarSignInBtn;
