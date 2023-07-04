import React, { useState } from "react";
import { PlusButton } from "../others/buttons";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

interface GroupCardPlusProps {
  _group_joined: boolean;
  _end_soon: boolean;
  _join_waitlist: boolean;
  _join_waitlist_joined: boolean;
}

export const GroupCard: React.FC<GroupCardPlusProps> = ({
  _group_joined,
  _end_soon,
  _join_waitlist,
  _join_waitlist_joined,
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className="mt-10 w-56"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {/* group img */}
      <div className="ml-12 flex flex-row">
        <div className="relative h-32 w-32 overflow-hidden rounded-full">
          <Image
            src="/assets/dummy/product.png"
            alt="Image Description"
            className="h-full w-full object-cover"
            width={300}
            height={300}
          />
          {/* ENDING SOON */}
          {_end_soon && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
              <div className="flex items-center">
                <div className="h-0.5 w-2.5 bg-red-500"></div>
                <p className="mx-1 text-sm font-bold text-red-600">
                  ENDING SOON
                </p>
                <div className="h-0.5 w-2.5 bg-red-500"></div>
              </div>
            </div>
          )}
          {/* JOIN WAITLIST */}
          {_join_waitlist && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="flex items-center">
                <div className="h-0.5 w-2.5 bg-white"></div>
                <p className="mx-1 text-sm text-white">JOIN WAITLIST </p>
                <div className="h-0.5 w-2.5 bg-white"></div>
              </div>
            </div>
          )}
        </div>
        {/* NOT JOINED */}
        {!_group_joined && !_join_waitlist_joined && mouseEnter && (
          <PlusButton onClick={() => {}} />
        )}
        {/* GROUP JOINED */}
        {_group_joined && (
          <div className="relative">
            <div className="absolute -right-8  w-28 rounded-full bg-red-600 ">
              <p className="pb-2 pt-2 text-center font-light text-white">
                Group Joined
              </p>
            </div>
          </div>
        )}
        {/* WAITLIST JOINED */}
        {_join_waitlist_joined && (
          <div className="relative">
            <div className="absolute -right-8  w-28 rounded-full bg-red-600 ">
              <p className="pb-2 pt-2 text-center font-light text-white">
                Waitlist Joined
              </p>
            </div>
          </div>
        )}
      </div>
      {/* group details */}
      <div className="">
        <p className="mt-1 text-lg text-center">Yum Yum Squad</p>
        <div className=" flex flex-row items-center justify-center">
        <p className="ml-2 mt-1 inline-block rounded-full bg-pink-100 pl-3 pr-3 text-red-700">
            Snacks
          </p>
          <p className="ml-2 mt-1 inline-block rounded-full bg-pink-100 pl-3 pr-3 text-red-700">
            Candy
          </p>
          </div>
        <div className="mt-2 flex flex-row items-center justify-center">
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
          <p className="ml-2 inline-block rounded-md bg-red-500 pl-3 pr-3 text-sm text-white">
            20% off
          </p>
        </div>
        <p className="mt-1 text-gray-500 text-center">Max discount possible: 30%</p>
      </div>
    </div>
  );
};

export default GroupCard;
