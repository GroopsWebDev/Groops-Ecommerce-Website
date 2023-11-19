import Link from "next/link";

const Orders = () => {
  const Selector = () => (
    <div className="flex flex-row items-center justify-center gap-x-2 ">
      <select
        id="small"
        className="rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900"
      >
        <option defaultValue={3} value={3}>
          Past 3 months
        </option>
      </select>
    </div>
  );

  const Filter = ({ label }: { label: string }) => (
    <button>
      <p
        className="rounded-full border border-gray-200 
                    bg-white px-5 py-1 text-gray-600"
      >
        {label}
      </p>
    </button>
  );

  const Order = () => (
    <div className="mt-10 w-full bg-white p-5">
      <div className="flex justify-between">
        <div className="flex gap-x-5">
          <img src="assets/dummy/product.png" className="h-16 rounded-full" />
          <div className="flex flex-col justify-center">
            <p className="">group joined</p>
            <p className="text-gray-400">Group name</p>
          </div>
        </div>

        <div className="flex gap-x-10">
          <div className="flex flex-col">
            <p className="text-gray-400">Order placed</p>
            <p className="">12/12/2021</p>
          </div>

          <div className="flex flex-col">
            <p className="text-gray-400">Order #</p>
            <p className="">123458333</p>
          </div>
        </div>
      </div>
      <hr className="mt-3" />

      <div className="flex w-full gap-x-10">
        <div className="grid w-1/2 grid-cols-5 gap-3 p-3">
          <img src="assets/dummy/product.png" className="" />
          <img src="assets/dummy/product.png" className="" />
          <img src="assets/dummy/product.png" className="" />
          <img src="assets/dummy/product.png" className="" />
          <img src="assets/dummy/product.png" className="" />
          <img src="assets/dummy/product.png" className="" />
          <img src="assets/dummy/product.png" className="" />
        </div>

        <div className="flex w-1/2 items-center justify-end gap-x-10">
          <div className="flex flex-col ">
            <span className="text-gray-400">Total</span>
            <span className="">20 items</span>
            <span className="">$ 50</span>
          </div>

          <div className="flex flex-col ">
            <span className="text-gray-400">status</span>
            <span className="">in progress</span>
          </div>

          <div className="flex flex-col ">
            <Link href="/order/1" className="text-primary-main underline">
              Order details
            </Link>
            <span className="underline">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-200 p-5">
      <h1 className="text-2xl ">Your Orders</h1>
      <span className="text-gray-400">Total 3 orders</span>

      <div className="mt-10 flex justify-between">
        <div className="flex gap-x-5">
          <Filter label="All" />
          <Filter label="Completed" />
          <Filter label="Cancelled" />
          <Filter label="In progressed" />
        </div>

        <div className="flex gap-x-3">
          <input
            placeholder="search order"
            className="rounded-lg border border-gray-300 px-2"
          />
          <Selector />
        </div>
      </div>

      <div className="mt-10">
        <Order />
        <Order />
      </div>
    </div>
  );
};

export default Orders;
