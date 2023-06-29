import { useRouter } from "next/router";
import Heart from "@public/assets/icons/heart.svg";

const Order: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const Right = () => {
    return (
      <div className="Right w-[30%] rounded bg-white p-5 text-gray-800">
        <p className="">group you joined</p>

        <div className="mt-3 flex gap-x-5">
          <img className="h-20 rounded-full" src="/assets/dummy/product.png" />
          <div className="flex flex-col gap-y-3">
            <p className="text-xl text-rose-600">Group name</p>
            <div className="flex gap-x-3">
              <p>21/50</p>
              <p className="rounded bg-rose-600 px-3 text-white">5% off</p>
            </div>
          </div>
        </div>

        <hr className="mt-3" />
        <div className="mt-2 flex justify-between">
          <p>Items subtotal</p>
          <p>$ 100</p>
        </div>

        <div className="mt-2 flex justify-between">
          <p>Tax</p>
          <p>$ 0.5</p>
        </div>

        <div className="mt-2 flex justify-between">
          <p>Shipping</p>
          <p>$ 100</p>
        </div>

        <hr />

        <div className="mt-2 flex justify-between">
          <p>Subtotal</p>
          <p>$ 102</p>
        </div>

        <div className="mt-2 flex justify-between">
          <p>Discount</p>
          <p className="text-rose-600">$ 10</p>
        </div>

        <hr />

        <div className="mt-5 flex justify-between">
          <p>Total</p>
          <p>$ 100</p>
        </div>
      </div>
    );
  };

  const Item = () => (
    <div className="flex w-full justify-between bg-white p-5">
      <div className="flex gap-x-5">
        <img className="" src="/assets/dummy/product.png" />

        <div className="flex flex-col justify-center">
          <p className="text-gray-400">Lay</p>
          <p>Food name</p>
          <p>Flavor</p>
          <p className="mt-5 flex gap-x-3 text-gray-400">
            <Heart className="w-4" />
            Add to lovelist
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-10">
        <p className="text-xs text-gray-400">x4</p>
        <p className="text-2xl text-rose-600">$9.54</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-200 p-5">
      <h2 className="text-xl ">Order #{id}</h2>
      <p className="text-gray-400">Total 9 items</p>

      <div className="mt-10 flex gap-x-5">
        <div className="Left w-[70%] rounded bg-white p-5">
          <div className="flex gap-x-10 text-gray-400">
            <p>status</p>
            <p>order placed</p>
            <p>estimated delivery time</p>
          </div>
          <div className="flex gap-x-10">
            <p>In progress</p>
            <p>May 21 2023</p>
            <p>May 22 2023</p>
          </div>
          <div className="mt-10 flex gap-x-10 text-gray-400">
            <p>delivery method</p>
            <p>tracking number</p>
          </div>
          <div className="flex gap-x-10">
            <p>standard shipping</p>
            <p>111111111</p>
          </div>
          <div className="mt-10 flex gap-x-10 text-gray-400">
            <p>payment method</p>
          </div>
          <div className="flex gap-x-10">
            <p>visa 4300 **** 123</p>
          </div>
          <div className="mt-10 flex gap-x-10 text-gray-400">
            <p>delivery address</p>
          </div>
          <div className="">
            <p>Eddy Luo</p>
            <p>234 College Street, ON, M2N 1J9</p>
            <p>+1 222 333 4444</p>
          </div>
        </div>

        <Right />
      </div>

      <div className="flex gap-x-5">
        <div className="mt-10 flex w-[70%] gap-x-5">
          <Item />
        </div>

        <div className="flex w-[30%] flex-col gap-y-3 px-5 py-10 text-gray-800">
          <span>Need Help?</span>
          <span>657 831 1111</span>
          <span>example@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
