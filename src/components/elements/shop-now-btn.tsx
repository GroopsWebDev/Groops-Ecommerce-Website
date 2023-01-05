import React from "react";

const ShopNowButton = () => {
  return (
    <div>
      <a
        href="#_"
        className="group text-xl relative inline-flex items-center justify-center overflow-hidden rounded-full  px-5 py-3 font-medium text-indigo-600 no-underline shadow-xl transition duration-300 ease-out hover:ring-1 hover:ring-purple-500"
      >
        <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
        <span className="ease absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-14 rotate-45 transform rounded-full bg-pink-500 opacity-30 transition duration-500 group-hover:rotate-90"></span>
        <span className="relative text-white">SHOP NOW</span>
      </a>
    </div>
  );
};

export default ShopNowButton;
