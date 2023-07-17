import Right from "@public/assets/icons/right.svg";
import Left from "@public/assets/icons/left.svg";
import { PlusIcon } from "@heroicons/react/20/solid";

export const RightButton = () => (
  <button className="">
    <Right />
  </button>
);

export const LeftButton = () => (
  <button className="">
    <Left />
  </button>
);

export const Filter = ({ category }: { category: string }) => (
  <button className="rounded-full bg-gray-100 px-2 text-sm">{category}</button>
);

export const PlusButton = ({ onClick }: { onClick: () => void }) => (
  <div>
    <button
      type="button"
      className="rounded-full bg-red-600 p-3 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      <PlusIcon className={`h-4 w-4`} aria-hidden="true" />
    </button>
  </div>
);

export const MinusButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-red-600 p-1 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </>
  );
};
