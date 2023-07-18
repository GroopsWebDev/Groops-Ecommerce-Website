import GroupCard from "~/components/group/card";

const Groups = () => {
  const groups = [1, 2, 3, 4, 5, 6, 7, 8];

  const Selector = ({ label }: { label: string }) => (
    <div className="flex flex-row items-center justify-center gap-x-2 ">
      <p className="font-medium text-gray-900 ">{label}:</p>

      <select className="rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900">
        <option defaultValue={label} value={label}>
          {label}
        </option>
      </select>
    </div>
  );

  const Side = () => (
    <div className="flex w-[20%] flex-col items-center text-gray-800">
      <div className="mt-20">
        <img src="/assets/dummy/product.png" className="rounded-full" />
      </div>

      <p className="mt-5 text-xl">Group name</p>

      <div className="mt-3 flex flex-row gap-x-3">
        <p className="rounded-full bg-purple-300 px-2 text-purple-800">Candy</p>
        <p className="rounded-full bg-purple-300 px-2 text-purple-800">
          Snacks
        </p>
      </div>

      <p className="mt-5 text-gray-400">max possible discount : 30%</p>

      <div className="flex flex-row gap-x-3">
        <p>21/50</p>
        <p className="rounded bg-rose-600 px-2 text-white">5% off</p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-y-3">
        <button>
          <p>Snacks</p>
        </button>
        <button>
          <p>Candies</p>
        </button>
        <button>
          <p>Instant Food</p>
        </button>
        <button>
          <p>Personal Care</p>
        </button>
        <button>
          <p>Beauty</p>
        </button>
        <button>
          <p>Home & Life</p>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex h-full flex-row">
        <Side />

        <div className="h-100 border-l border-gray-300"></div>

        <div className="w-[80%] p-5">
          <div className="mt-10 flex flex-row flex-wrap gap-x-5">
            <Selector label="Time Left" />
            <Selector label="Size" />
            <Selector label="Category" />
            <Selector label="Group Type" />
          </div>

          <div className="mb-10 mt-10 grid grid-cols-4 place-items-center gap-x-5 gap-y-10 p-10 pt-5">
            {groups.map((group) => (
              <GroupCard
                _group_joined={false}
                _end_soon={false}
                _join_waitlist_joined={false}
                _join_waitlist={false}
                key={group}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
