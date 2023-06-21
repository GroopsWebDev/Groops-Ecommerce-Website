import { LeftButton, RightButton, Filter } from "../buttons";
import Link from 'next/link';
import Arrow from '@public/assets/icons/arrow.svg';
import Heart from '@public/assets/icons/heart.svg';
import Card from './card';

const Row = () => {

  return <>

    <div className="p-10 z-0">

      <div className="flex flex-row justify-between items-center">

        <div className="flex flex-col">
          <h1 className=" text-2xl">Selling Fast</h1>
          <div className="flex flex-row pt-2 gap-x-2">
            <Filter />
            <Filter />
          </div>
        </div>

        <div className="flex flex-row items-center">

          <Link href="" className="text-rose-600 mr-5 flex items-center">
            <p className="mr-2">see all</p>
            <Arrow />
          </Link>

          <LeftButton />
          <RightButton />

        </div>

      </div>


      <div className='flex flex-row justify-between items-center mt-10'>

        <div>

          <Card />

        </div>
      </div>
    </div>

  </>
};

export default Row