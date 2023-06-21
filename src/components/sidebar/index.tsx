import Cross from '@public/assets/icons/cross.svg';
import Account from '@public/assets/icons/account.svg';
import Groups from '@public/assets/icons/groups.svg';
import Orders from '@public/assets/icons/orders.svg';
import Heart from '@public/assets/icons/heart.svg';
import Logout from '@public/assets/icons/logout.svg';

import Link from 'next/link';

const Sidebar = (
  { showSide, setShow }: { showSide: boolean, setShow: (show: boolean) => void }
) => {

  const CrossButton = () => (
    <button className="absolute right-5 top-5" onClick={() => setShow(false)}>
      <Cross />
    </button>
  );

  if (!showSide) return null;

  return <>

    <div className="fixed left-0 w-1/5 bottom-0 top-0 z-50">

      <div className="bg-white h-full shadow-2xl text-gray-700">

        <CrossButton />

        <div className="flex flex-col h-full pl-5 text-gray-700 gap-y-3">

          <Link className='flex items-center' href="">
            <Account />
            <p className='ml-2'>Your Account</p>
          </Link>

          <Link className='flex items-center' href="">
            <Orders />
            <p className='ml-2'>Your Orders</p>
          </Link>

          <Link className='flex items-center' href="">
            <Groups />
            <p className='ml-2'>Your Groups</p>
          </Link>


          <Link className='flex items-center' href="">
            <Heart />
            <p className='ml-2'>Your LoveList</p>
          </Link>

          <Link className='flex items-center' href="">
            <Logout />
            <p className='ml-2'>Logout</p>
          </Link>

        </div>
      </div>

    </div >

  </>

};


export default Sidebar;