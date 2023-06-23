import Right from '@public/assets/icons/right.svg';
import Left from '@public/assets/icons/left.svg';
import { PlusIcon } from '@heroicons/react/20/solid'

interface Props {
  className: string
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

export const Filter = () => (
  <button className="text-sm bg-gray-200 rounded-full px-2">
    button
  </button>
)

export const PlusButton: React.FC<Props> = ({ className }) => (
  <div className={className}>
  <button
  type="button"
  className="rounded-full bg-red-600 p-3 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  <PlusIcon className="h-5 w-5" aria-hidden="true" />
</button>
</div>
)