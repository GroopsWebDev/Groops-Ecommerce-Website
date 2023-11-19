import GroupRow from "@components/group/row";
import Row from "~/components/product/row";

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
        <p className="rounded bg-primary-main px-2 text-white">5% off</p>
      </div>

      <p className="mt-5 text-gray-400">max possible discount : 30%</p>

      <div
        className="mt-5 flex flex-row justify-center gap-x-3 text-gray-400 transition-all hover:text-primary-main"
        style={{
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          alert("Add sharing handler here");
        }}
      >
        <img src="/assets/group/shareIcon.svg" className="h-4 w-4" />
        <p>Share</p>
      </div>
      <button className="mt-3 rounded bg-primary-main px-20 py-2 text-white ">
        Join group
      </button>
    </div>
  );

  const Info = () => (
    <div className="flex flex-col justify-start p-5 ">
      <div className=" flex h-1/3 gap-x-10">
        <div>
          <p className="text-2xl font-bold">Grooper</p>
          <p className="text-sm">Name</p>
          <img
            className="mt-3 inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>

        <div>
          <p className="text-2xl font-bold">Group members (10)</p>
          <button className="text-sm text-primary-main">See all</button>
          <div className="mt-3 -space-x-2 overflow-hidden before:flex">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
        </div>
      </div>

      <p className="mt-10">
        <strong>Group Introductions: </strong>
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque 
        elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin ege tegestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis
        dapibus diam vel metus tempus vulputate.
        
        `}
      </p>
      <p className="mt-10 font-semibold">
        Choose items from the following categories to recieve discount
      </p>
      <div className="mt-5 flex gap-x-3 ">
        <p className="rounded-full border border-primary-main px-3 py-1 text-primary-main">
          Snacks + 1% off
        </p>
        <p className="rounded-full border border-primary-main px-3 py-1 text-primary-main">
          Candy + 2% off
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <div className="relative">
        <img src="/assets/group/cover.png" className="w-full" />

        <div className="absolute bottom-10 ml-10 flex justify-center gap-x-5 rounded-lg bg-primary-main p-5 text-white">
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
        <div className="w-[1px] bg-primary-main"></div>
        <Info />
      </div>

      <Row section_category="Popular Items" />
    </div>
  );
};

export default Group;
