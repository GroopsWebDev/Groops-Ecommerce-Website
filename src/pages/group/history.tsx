import GroupRow from "@components/group/row";
import Group from "./[id]";

const GroupHistory = () => {
  const GroupCard = () => (
    <div className="flex w-[20%] flex-col items-center text-gray-800">
      <img src="/assets/dummy/product.png" className="rounded-full" />

      <p className="mt-5 text-xl">Group name</p>

      <div className="mt-3 flex flex-row gap-x-3">
        <p className="rounded-full bg-purple-300 px-2 text-purple-800">Candy</p>
        <p className="rounded-full bg-purple-300 px-2 text-purple-800">
          Snacks
        </p>
      </div>

      <div className="mt-3 flex flex-row gap-x-3">
        <p>21/50</p>
        <p className="rounded bg-primary-main px-2 text-white">5% off</p>
      </div>

      <p className="mt-3 text-gray-400">max possible discount : 30%</p>
    </div>
  );

  const Row = () => (
    <div className="mt-5 flex gap-x-5 bg-white p-5">
      <GroupCard />
      <div className="w-[1px] bg-gray-200"></div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row gap-x-5">
          <div className="flex flex-col gap-y-1">
            <p className="text-gray-400">order id</p>
            <p className="text-primary-main underline">1234567</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-gray-400">order placed</p>
            <p className="">April 21 2023</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-gray-400">total</p>
            <p className=" ">$ 20</p>
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-gray-400">Status</p>
            <p className=" ">Ending soon</p>
          </div>
        </div>

        <div className="mt-10 flex gap-x-3">
          <img src="/assets/dummy/product.png" className="h-1/2" />
          <img src="/assets/dummy/product.png" className="h-1/2" />
          <img src="/assets/dummy/product.png" className="h-1/2" />
          <img src="/assets/dummy/product.png" className="h-1/2" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-200 p-10">
      <h1 className="text-xl font-bold">Your group</h1>
      <div className="mt-10 flex gap-x-10">
        <button className="rounded-full border border-gray-200 bg-gray-100 px-2 py-1 text-gray-600">
          Groups you joined
        </button>
        <button className="rounded-full border border-gray-200 bg-gray-100 px-2 py-1 text-gray-600">
          Groups you Owned
        </button>
      </div>

      <div className="mt-10">
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    </div>
  );
};

export default GroupHistory;
