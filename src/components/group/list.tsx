import { Group } from "@prisma/client";
import { getRemainingTime } from "../../utils/utils";
import Ball from "../../../public/assets/utility/ball.svg";

export default function List({ groups, title }: any) {

  return <>
    {groups.length != 0 ?
      <h1 className="text-purple-600 text-center mt-20">
        {title === "search" ? groups.length + ` results` : title}
      </h1>
      : <h1 className="text-purple-600 text-center mt-20">No Results Found</h1>}
    
    <Ball className="absolute right-10" />
    
    <div className="mt-20 flex flex-col place-items-center">
      {groups.map((group: any, index: number) => (
        <div
          key={index}
          className="relative flex flex-col place-items-center mb-10"
        >
          <div className="justify-center align-center h-72 w-[35rem]">
            <img
              src={`https://api.gr-oops.com/` + group?.groupImg}
              alt={group?.groupName ? group.groupName : undefined}
              className=" rounded-3xl h-full w-full object-cover object-center"
            />
          </div>
          <h5 className="absolute top-3 left-1/4 text-white backdrop-blur-3 bg-gray-900 bg-opacity-50 rounded-lg p-0.5">
            {group?.groupName}
          </h5>
          <div className="absolute bottom-3 left-1/4 text-white backdrop-blur-3 bg-gray-900 bg-opacity-50 rounded-lg p-0.5">
            Ends in {getRemainingTime(group?.endDate)}
          </div>
        </div>
      ))}
    </div>
  </>
}

