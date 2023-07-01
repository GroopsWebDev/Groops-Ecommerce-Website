import Right from "@public/assets/icons/right.svg";
import Left from "@public/assets/icons/left.svg";
import { PlusIcon } from "@heroicons/react/20/solid";

interface PlusButton {
  onClick: () => void;
}

interface FilterProps {
  category: string;
}

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

export const Filter: React.FC<FilterProps> = ({ category }) => (
  <button className="rounded-full bg-gray-100 px-2 text-sm">{category}</button>
);

export const PlusButton: React.FC<PlusButton> = ({ onClick }) => (
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
