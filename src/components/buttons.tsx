import Right from '@public/assets/icons/right.svg';
import Left from '@public/assets/icons/left.svg';
import { PlusIcon } from '@heroicons/react/20/solid'

interface PlusButton {
  size: number,
  onClick: () => void,
}

interface FilterProps{
  category:string
}

export const RightButton = () => (

  <button className="">
    <Right />
  </button>

)

export const LeftButton = () => (
  <button className="">
    <Left />
  </button>
)

export const Filter: React.FC<FilterProps> = ({ category }) => (
  <button className="text-sm bg-gray-100 rounded-full px-2">
    {category}
  </button>
)

export const PlusButton: React.FC<PlusButton> = ({ size, onClick }) => (
  <div>
  <button
  type="button"
  className="rounded-full bg-red-600 p-3 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  onClick={onClick}
>
  <PlusIcon className={`w-${size} h-${size}`} aria-hidden="true" />
</button>
</div>
)