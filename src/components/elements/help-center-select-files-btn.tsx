import React from "react";

interface Props {
  onClick: () => void;
}

const SelectFilesButton = ({onClick}: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="no-underline group relative inline-block inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-5 py-3 font-medium text-indigo-600 shadow-2xl"
      >
        <span className="ease absolute top-0 left-0 -mt-10 -ml-3 h-40 w-40 rounded-full bg-red-500 blur-md transition-all duration-700"></span>
        <span className="ease absolute inset-0 h-full w-full transition duration-700 group-hover:rotate-180">
          <span className="absolute bottom-0 left-0 -ml-10 h-24 w-24 rounded-full bg-purple-500 blur-md"></span>
          <span className="absolute bottom-0 right-0 -mr-10 h-24 w-24 rounded-full bg-pink-500 blur-md"></span>
        </span>
        <span className="relative text-white">Select Files</span>
      </button>
    </div>
  );
};

export default SelectFilesButton;
