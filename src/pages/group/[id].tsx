import GroupRow from "@components/group/row";

const Group = () => {
  const Countdown = () => (
    <div className="flex gap-x-2">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold ">03</p>
        <p className="text-xs ">Days</p>
      </div>
      <p className="text-3xl font-bold "> : </p>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold ">07</p>
        <p className="text-xs ">Hour</p>
      </div>
      <p className="text-3xl font-bold"> : </p>
      <div className="flex flex-col items-center">
        <p className="text-3xl font-bold">20</p>
        <p className="text-xs">Minute</p>
      </div>
    </div>
  );

  const GroupCard = () => (
    <div className="flex w-[40%] flex-col items-center text-gray-800">
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
        <p className="rounded bg-rose-600 px-2 text-white">5% off</p>
      </div>

      <p className="mt-5 text-gray-400">max possible discount : 30%</p>

      <button className="mt-3 rounded bg-rose-600 px-20 py-2 text-white">
        Join group
      </button>
    </div>
  );

  const Info = () => (
    <div className="flex flex-col justify-start p-5">
      <div className="flex h-1/3 gap-x-10">
        <div className="">
          <p className="text-2xl font-bold">Grooper</p>
          <p className="text-sm">name</p>
          <img
            src="/assets/dummy/product.png"
            className="mt-3 h-1/2 rounded-full"
          />
        </div>

        <div>
          <p className="text-2xl font-bold">Group members (10)</p>
          <button className="text-sm text-rose-600">see all</button>
          <div className="mt-2 flex h-1/2 flex-row gap-x-1">
            <img
              src="/assets/dummy/product.png"
              className="h-full rounded-full"
            />
            <img
              src="/assets/dummy/product.png"
              className="h-full rounded-full"
            />
            <img
              src="/assets/dummy/product.png"
              className="h-full rounded-full"
            />
          </div>
        </div>
      </div>

      <p className="mt-5">
        group introduction : dummy dummy dummy dummy dummy dummy dummy dummy
        dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
        dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy group
      </p>
      <p className="mt-10">
        choose items from the following categories to recieve discount
      </p>
      <div className="mt-3 flex gap-x-3">
        <p className="rounded-full border border-rose-600 p-1 text-rose-600">
          Snacks 1% off
        </p>
        <p className="rounded-full border border-rose-600 p-1 text-rose-600">
          Snacks 1% off
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="relative">
        <img src="/assets/group/cover.png" className="w-full" />

        <div className="absolute bottom-10 ml-10 flex justify-center gap-x-5 rounded-lg bg-rose-600 p-5 text-white">
          <div>
            <p>current discount</p>
            <p className="text-3xl font-bold">5 % off</p>
            <p className="text-xs">maximum discount : 30%</p>
          </div>
          <div className="w-0.5 bg-white"></div>
          <div>
            <p>group ends in</p>
            <Countdown />
          </div>
        </div>
      </div>

      <div className="flex gap-x-5 p-16">
        <GroupCard />
        <div className="w-[1px] bg-rose-600"></div>
        <Info />
      </div>

      <GroupRow />
    </div>
  );
};

export default Group;
