import { LeftButton, RightButton, Filter, PlusButton } from "../buttons";
import Link from "next/link";
import Arrow from "@public/assets/icons/arrow.svg";
import GroupCard from "./group_card";
import GroupCardPlus from "./group_card_plus";

const Row = () => {
  return (
    <>
      <div className="z-0 p-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h1 className=" text-2xl">Groups that help you save</h1>
            <div className="flex flex-row gap-x-2 pt-2">
              <Filter />
              <Filter />
            </div>
          </div>

          <div className="flex flex-row items-center">
            <Link href="" className="mr-5 flex items-center text-rose-600">
              <p className="mr-2">see all</p>
              <Arrow />
            </Link>

            <LeftButton />
            <RightButton />
          </div>
        </div>
        <div className="flex flex-row items-center">
        <GroupCard />
        <GroupCardPlus />
        <GroupCardPlus />
        </div>

      </div>
    </>
  );
};

export default Row;
