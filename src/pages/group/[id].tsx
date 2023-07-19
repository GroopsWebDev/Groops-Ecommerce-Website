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
        <p className="rounded bg-rose-600 px-2 text-white">5% off</p>
      </div>

      <p className="mt-5 text-gray-400">max possible discount : 30%</p>

      <button className="mt-3 rounded bg-rose-600 px-20 py-2 text-white">
        Join group
      </button>
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
      </div>
    </div>
  );
};

export default Group;
