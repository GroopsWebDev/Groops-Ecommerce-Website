import { getRemainingTime } from "../../utils/utils";
import Ball from "../../../public/assets/utility/ball.svg";
import CountdownTimer from "../../components/CountdownTimer";
export default function List({ groups, title }: any) {
  return (
    <>
      {groups.length != 0 ? (
        <h1 className="mt-20 text-center text-purple-600">
          {title === "search" ? groups.length + ` results` : title}
        </h1>
      ) : (
        <h1 className="mt-20 text-center text-purple-600">No Results Found</h1>
      )}

      <Ball className="absolute right-10" />

      <div className="mt-20 flex flex-col place-items-center">
        {groups.map((group: any, index: number) => (
          <div
            key={index}
            className="relative mb-10 flex flex-col place-items-center"
          >
            <div className="align-center h-72 w-[35rem] justify-center">
              <img
                src={`https://api.gr-oops.com/` + group?.groupImg}
                alt={group?.groupName ? group.groupName : undefined}
                className=" h-full w-full rounded-3xl object-cover object-center"
              />
            </div>
            <h5 className="backdrop-blur-3 absolute top-3 left-1/4 rounded-lg bg-gray-900 bg-opacity-50 p-0.5 text-white">
              {group?.groupName}
            </h5>
            {/* <div className="backdrop-blur-3 absolute bottom-3 left-1/4 rounded-lg bg-gray-900 bg-opacity-50 p-0.5 text-white">
              Ends in {getRemainingTime(group?.endDate)}
            </div> */}
            <div className="backdrop-blur-3 absolute bottom-3 left-1/4 rounded-lg bg-gray-900 bg-opacity-50 p-0.5 text-white">
              Ends in <CountdownTimer endDate={group?.endDate} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
