import React from "react";
import { PlusButton } from "../buttons";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
interface GroupCardPlusProps {
  _has_plus: boolean;
}

export const GroupCard = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center">
        <div className="h-32 w-32 overflow-hidden rounded-full">
          <img
            src="/assets/dummy/product.png"
            alt="Image Description"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mt-3 text-xl">Group name</p>

        <p className="mt-1 text-sm">Ends in 1 day</p>

        <div className="mt-1 flex flex-row">
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5"
          >
            <path
              d="M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="pl-2 text-sm">21/50</p>

          <p className="pl-2 text-sm text-rose-600">20 % off</p>
        </div>
      </div>
    </div>
  );
};

// export default GroupCard;

export const GroupCardPlus: React.FC<GroupCardPlusProps> = ({ _has_plus }) => {
  return (
    <div className="mt-10 w-56">
      {/* group img */}
      <div className="ml-12 flex flex-row">
        <div className="h-32 w-32 overflow-hidden rounded-full">
          <Image
            src="/assets/dummy/product.png"
            alt="Image Description"
            className="h-full w-full object-cover"
            width={300}
            height={300}
          />
        </div>
                    {/* <PlusButton className="-mt-32 ml-32" /> */}
        {_has_plus && (
            <PlusButton className="" onClick={()=>{}}/>
        )}
      </div>
      {/* group details */}
      <div className="mt-0">
        <div className="flex">
          <p className="text-sm text-gray-500">Yiran's</p>
          <div className="ml-auto">
            <Link href="#">
              <FiExternalLink className="text-xl" />
            </Link>
          </div>
        </div>

        <p className="mt-1 text-xl">Yum Yum Squad</p>
        <div className="mt-1 flex flex-row">
          <svg
            width="15"
            height="15"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5"
          >
            <path
              d="M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z"
              stroke="#111827"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="pl-2 text-sm">21/50</p>
          <p className="ml-2 inline-block rounded-md bg-red-500 pl-2 pl-3 pr-3 text-sm text-white">
            20% off
          </p>
        </div>
        <p className="mt-1 text-gray-500">Max discount possible: 30%</p>
        <p className="mt-1 inline-block bg-gray-100 pl-3 pr-3 text-gray-600">
          Pre-listed Group
        </p>
      </div>
    </div>
  );
};
