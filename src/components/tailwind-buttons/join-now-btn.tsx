import React from "react";

const JoinNowButton = () => {
  return (
    <div>
      <button
        className="no-underline text-black text-2xl group relative inline-flex items-center justify-start overflow-hidden rounded-full bg-white border-2 border-white px-6 py-3 pt-2 pb-2 pl-10 pr-10 transition-all"
      >
        <span className="absolute bottom-0 left-0 mb-16 ml-9 h-48 w-48 -translate-x-full translate-y-full rotate-[-40deg] rounded bg-gradient-to-br from-blue-600 via-purple-600 to-[#ff8a05] transition-all duration-500 ease-out group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left transition-colors duration-300 ease-in-out group-hover:text-white">
          Join Now
        </span>
      </button>
    </div>
  );
};

export default JoinNowButton;
