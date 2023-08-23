
import ProductRow from "@components/product/row";
import Link from "next/link";

const Checkout = () => {
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

        <div className="mt-2 flex justify-center">
          <Link
            href="/order/1"
            className="flex w-full justify-center rounded bg-rose-600 p-2 text-white"
          >
            Checkout
          </Link>
        </div>
      </div>
    );
  };

  const CountrySelector = () => (
    <>
      <label
        htmlFor="countries"
        className="mt-3 block text-gray-800 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="countries"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </>
  );

  return (
    <>
      <div className="bg-gray-200 p-5">
        <h2 className="text-xl ">Cart</h2>
        <p className="text-gray-400">Total 9 items</p>

        <div className="mt-10 flex gap-x-5">
          <div className="Left w-[70%] rounded bg-white p-5">
            <h2 className="text-xl">Personal information</h2>
            <div className="mt-3 flex w-full gap-x-5">
              <div className="flex w-full flex-col gap-y-1">
                <p className="text-gray-800">First Name</p>
                <input className="rounded-lg border p-2" />
              </div>
              <div className="flex w-full flex-col gap-y-1">
                <p className="text-gray-800">Last Name</p>
                <input className="rounded-lg border p-2" />
              </div>
            </div>
            <div className="mt-3 flex w-full gap-x-5">
              <div className="flex w-full flex-col gap-y-1">
                <p className="text-gray-800">Email Address</p>
                <input className="rounded-lg border p-2" />
              </div>
              <div className="flex w-full flex-col gap-y-1">
                <p className="text-gray-800">Phone Number</p>
                <input className="rounded-lg border p-2" />
              </div>
            </div>

            <h2 className="mt-5 text-xl">Shipping Address</h2>

            <CountrySelector />

            <p className="mt-3 text-gray-800">Street Address</p>
            <input className="w-full rounded-lg border p-2" />

            <div className="mt-3 flex gap-x-5">
              <div className="flex w-full flex-col">
                <p className=" text-gray-800">City</p>
                <input className="w-full rounded-lg border p-2" />
              </div>
              <div className="flex w-full flex-col">
                <p className=" text-gray-800">State/Province</p>
                <input className="w-full rounded-lg border p-2" />
              </div>
              <div className="flex w-full flex-col">
                <p className=" text-gray-800">Zip/Postal</p>
                <input className="w-full rounded-lg border p-2" />
              </div>
            </div>
          </div>

          <Right />
        </div>
      </div>
      <ProductRow section_category="You may also like" />
      <hr />
      <ProductRow section_category="You recentely viewed" />
    </>
  );
};

export default Checkout;
