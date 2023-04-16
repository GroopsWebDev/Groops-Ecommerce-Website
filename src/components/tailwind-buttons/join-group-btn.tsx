import React from "react";

interface Props {
  text: string;
  onClick: () => void;
}

const JoinGroupButton = ({ text, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="group relative px-6 py-3 font-bold text-black"
      >
        <span className="absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform bg-red-300 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="absolute inset-0 h-full w-full border-4 border-black"></span>
        <span className="relative">{text}</span>
      </button>
    </div>
  );
};

export default JoinGroupButton;
