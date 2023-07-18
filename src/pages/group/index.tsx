const Index = () => {
  return (
    <div>
      <div className="flex justify-center gap-x-20 bg-gray-200 p-20">
        <div className="w-[40%] text-center">
          <h1 className="text-5xl font-bold">Groops E-commerce</h1>

          <p className="mt-10 text-2xl text-gray-700">
            Revolutionize the tranditional way of doing E-commerce, our
            group-buy model makes everyday items more affordable for you
          </p>

          <p className="mt-10 text-gray-400">
            Our group-buy buisness model can help group leader to monetize their
            influence and values through initializing a group and congregating
            consumers. All participating members can purchase items at a lower
            price.
          </p>

          <div className="mt-5 flex justify-center gap-x-5">
            <button className="rounded-lg bg-rose-600 px-4 py-3 text-white">
              create a group
            </button>
            <button className="rounded-lg bg-rose-600 px-4 py-3 text-white">
              Join a group
            </button>
          </div>
        </div>

        <img className="w-[30%]" src="/assets/group/logo.png" />
      </div>

      <div className="flex justify-between gap-x-10 p-36">
        <div className="flex flex-col items-center">
          <img src="/assets/group/hands.png" className="" />
          <p className="mt-3 text-xl font-bold">You can create a group</p>
          <p className="mt-5">
            As a group leader, you can start a group and get paid through
            commission according to the size of your group.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/group/logo_small.png" className="" />
          <p className="mt-3 text-xl font-bold">You can join a group</p>
          <p className="mt-5">
            As a group member you can participate in a group and enjoy the
            discount off your selected items
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/assets/group/logo_small.png" className="" />
          <p className="mt-3 text-xl font-bold">Groups</p>
          <p className="mt-5">
            A group will be finialized when it reaches the member limit or when
            the time runs out whichever comes first. The final discount rate
            will be calculated automatically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
