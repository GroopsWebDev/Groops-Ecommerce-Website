import { LeftButton, RightButton, Filter, PlusButton } from "../buttons";
import Link from "next/link";
import Arrow from "@public/assets/icons/arrow.svg";
import {GroupCard, GroupCardPlus} from "./group_card";

const Row = () => {
  return (
    <>
      <div className="z-0 p-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h1 className=" text-2xl">Groups that help you save</h1>
            <div className="flex flex-row gap-x-2 pt-2">
              <Filter category='snack'/>
              <Filter category='Instant Food'/>
              <Filter category='Personal Care'/>
              <Filter category='Beauty'/>
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
        {/* Group Cards */}
        <div className="flex flex-row items-center justify-between">
        <GroupCardPlus _has_plus={false}/>
        <GroupCard />
        <GroupCardPlus _has_plus={true}/>
        <GroupCardPlus _has_plus={true}/>
        <GroupCardPlus _has_plus={true}/>
        </div>

      </div>
    </>
  );
};

export default Row;
