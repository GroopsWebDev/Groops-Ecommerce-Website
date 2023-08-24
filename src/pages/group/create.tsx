import { useRouter } from "next/router";
import { useState } from "react";
import ProgressBar from "@components/group/progressBar";

const CreateGroupPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const Discount = () => {
    const Selector = () => (
      <select
        id="size"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option value="20">2% off (20 members)</option>
        <option value="20">8% off (50 members)</option>
      </select>
    );

    return (
      <div className="flex w-full justify-between gap-x-5 p-5 text-gray-800">
        <div className="w-[30%] p-5">
          <h1 className="text-2xl">Group Discount</h1>
          <p className="text-gray-400">
            Decide group discount by selecting group size and category
          </p>
        </div>

        <div className="w-[60%] rounded-xl bg-white p-5 text-gray-700">
          <p className="">Base Discoutn - Group Size</p>
          <p className=" mb-1 mt-1 text-gray-400">
            select the maximum number of group members
          </p>
          <Selector />

          <p className="mt-10">Category Discount - Group Category Labels</p>
          <p className="mt-1 text-gray-400">
            Items selected have extra discount (Maximum 2)
          </p>

          <div className="mt-5 grid grid-cols-3 gap-4">
            <button className="rounded-full border bg-gray-100 p-3">
              5% - Snack
            </button>
            <button className="rounded-full border bg-gray-100 p-3">
              5% - Snack
            </button>
            <button className="rounded-full border bg-gray-100 p-3">
              5% - Snack
            </button>
            <button className="rounded-full border bg-gray-100 p-3">
              5% - Snack
            </button>
            <button className="rounded-full border bg-gray-100 p-3">
              5% - Snack
            </button>
            <button className="rounded-full border bg-gray-100 p-3">
              5% - Snack
            </button>
          </div>

          <p className="mt-10">Estimated Total Discount</p>
          <p className="mt-1 text-gray-400">
            estimated discount is based on the group size and category labels
          </p>

          <div className="mt-5 flex justify-between">
            <p>
              Estimated <span className="font-bold">Based</span> Discount
            </p>
            <p className="font-bold text-rose-600">2%</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p>
              Discount on <span className="font-bold">Candies</span>
            </p>
            <p className="font-bold text-rose-600">2%</p>
          </div>
          <div className="mt-5 flex justify-between">
            <p>
              Discount on <span className="font-bold">Pearsonal Care</span>
            </p>
            <p className="font-bold text-rose-600">2%</p>
          </div>
        </div>
      </div>
    );
  };

  const Profile = () => (
    <div className="flex w-full justify-between gap-x-5 p-5">
      <div className="w-[30%] p-5">
        <h1 className="text-2xl">Group Profile</h1>
        <p className="text-gray-400">
          This information will be displayed publicly for others to search and
          join
        </p>
      </div>

      <div className="w-[60%] rounded-xl bg-white p-5 text-gray-700">
        <p className=" text-gray-800">Group Name</p>
        <p className=" text-gray-400">Choose a unique name for you group</p>
        <input className="mt-3 w-full rounded-lg border p-2" />

        <p className=" mt-10 text-gray-800">About</p>
        <p className=" text-gray-400">Description of your group</p>
        <textarea className="mt-3 w-full rounded-lg border p-2" />

        <div className="mt-10">
          <p>Group Gmage</p>
          <p className="text-sm text-gray-400">
            This photo will be on the group detail page
          </p>
          <div className="mt-1 flex items-center gap-x-5">
            <img
              src="https://source.unsplash.com/random/200x200"
              className="h-20 w-20 rounded-full"
            />
            <button className="h-1/2 rounded-lg border p-2">Change</button>
          </div>
        </div>

        <p className=" mt-10 text-gray-800">Group Banner Photos</p>
        <p className=" text-gray-400">
          This photo will be on group detail page
        </p>
        <div className="flex w-full items-center justify-center">
          <label
            htmlFor="dropzone-file"
            className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pb-6 pt-5">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );

  const pageTable = [<Profile />, <Discount />];

  return (
    <>
      <div>
        <ProgressBar current={currentPage} />
      </div>
      <div className="w-full bg-gray-200 py-10">
        {pageTable[currentPage - 1]}
        <div className="mt-10 flex justify-between px-5">
          <button className="rounded border border-rose-600 bg-white px-7 py-2 text-rose-600">
            Back
          </button>
          <button
            onClick={() =>
              currentPage < 6 ? setCurrentPage(currentPage + 1) : null
            }
            className="rounded border border-rose-600 bg-rose-600 px-7 py-2 text-white"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateGroupPage;
