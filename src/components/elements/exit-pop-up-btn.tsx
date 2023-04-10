import React from "react";

interface Props {
  text: string;
  className: string;
  onClick: () => void;
}

const ExitPopupButton = ({ text, className, onClick }: Props) => {
  return (
    <div className={className}>
     <button onClick={onClick} className="relative inline-block px-4 py-2 font-medium group w-52">
<span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
<span className="relative text-black group-hover:text-white">{text}</span>
</button>
    </div>
  );
};

export default ExitPopupButton;

