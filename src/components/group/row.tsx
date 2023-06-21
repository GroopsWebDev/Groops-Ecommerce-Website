import { LeftButton, RightButton, Filter } from "../buttons";
import Link from 'next/link';
import Arrow from '@public/assets/icons/arrow.svg';

const Row = () => {


  return <>

    <div className="p-10 z-0">

      <div className="flex flex-row justify-between items-center">

        <div className="flex flex-col">
          <h1 className=" text-2xl">Groups that help you save</h1>
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

          <div className="flex flex-col items-center">

            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img src="/assets/dummy/product.png" alt="Image Description" className="w-full h-full object-cover" />
            </div>

            <p className="mt-5 text-xl">Group name</p>

            <p className="mt-3 text-sm">Ends in 1 day</p>

            <div className="flex flex-row mt-3">

              <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
                <path d="M10 2.35418C10.7329 1.52375 11.8053 1 13 1C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9C11.8053 9 10.7329 8.47624 10 7.64582M13 19H1V18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V19ZM13 19H19V18C19 14.6863 16.3137 12 13 12C11.9071 12 10.8825 12.2922 10 12.8027M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5Z"
                  stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <p className="text-sm pl-2">21/50</p>

              <p className="text-sm text-rose-600 pl-2">20 % off</p>

            </div>

          </div>

        </div>
      </div>
    </div>

  </>
};

export default Row