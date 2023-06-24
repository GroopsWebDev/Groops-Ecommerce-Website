import Heart from "@public/assets/icons/heart.svg";
import Link from "next/link";
import Image from "next/image";
import { PlusButton } from "../buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ProductCardProps {
  _on_discount: boolean;
  _one_plus: boolean;
  _mouse_enter: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  _on_discount,
  _one_plus,
  _mouse_enter,
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className="w-52"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      {/* group img */}
      <div className="flew-row relative flex">
        <Image
          src="/assets/products/lays.svg"
          alt="Lays"
          width={150}
          height={150}
          className="ml-8"
        />
        {_one_plus && mouseEnter && (
          <div className="absolute right-0 flex w-28 items-center justify-between rounded-full bg-red-600">
            <button className="ml-0 rounded-full pb-2.5 pl-3.5 pr-3.5 pt-2.5 text-sm text-white hover:bg-red-700">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <p className="font-lg ml-3 font-medium text-white">1</p>
            <div className="ml-auto">
              <PlusButton size={4} onClick={() => {}} />
            </div>
          </div>
        )}
        {!_one_plus && mouseEnter && <PlusButton size={4} onClick={() => {}} />}
      </div>

      {/* group details */}
      <div className="mt-1">
        <div className="flex">
          <p className="text-sm text-gray-500">Lay's</p>
          <div className="ml-auto">
            <button>
              <Heart className="w-5" />
            </button>
          </div>
        </div>

        <p className="text-l mt-1">Grilled Squid Potato Chips, 2.46oz</p>
        <p className="mt-1 inline-block rounded-md bg-gray-100 pl-3 pr-3 text-gray-600">
          700+ sold
        </p>
        {_on_discount && (
          <p className="ml-2 mt-1 inline-block rounded-md bg-red-100 pl-3 pr-3 text-red-700">
            51 left
          </p>
        )}

        <div className="mt-1 flex flex-row items-center">
          <p className="pt-5 text-xl font-bold text-rose-600">$ 2.49</p>
          {_on_discount && (
            <>
              <p className="pt-5 text-xl font-bold font-light text-gray-400 text-rose-600 line-through ml-1">
                $ 2.99
              </p>
              <p className="ml-2 mt-5 inline-block rounded-md bg-red-500 pl-2 pl-3 pr-3 text-sm text-white">
                20% off
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
