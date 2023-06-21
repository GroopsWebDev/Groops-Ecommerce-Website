import { LeftButton, RightButton, Filter } from "../buttons";
import Link from 'next/link';
import Arrow from '@public/assets/icons/arrow.svg';
import Heart from '@public/assets/icons/heart.svg';

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

          <div className="flex flex-col flex-wrap justify-start">

            <div className="w-32 h-32 overflow-hidden">
              <img src="/assets/dummy/product.png" alt="Image Description" className="w-full h-full object-cover" />
            </div>

            <div className="flex justify-between mt-5 gap-x-5">
              <p>company name</p>
              <button>
                <Heart className="w-5" />
              </button>
            </div>

            <p className="mt-5 text-lg">Product name</p>

            <p className="text-xl font-bold text-rose-600 pt-5">$ 20</p>

          </div>

        </div>
      </div>
    </div>

  </>
};

export default Row