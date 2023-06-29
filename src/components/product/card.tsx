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
  _sold_out: boolean;
  _mouse_enter: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  _on_discount,
  _one_plus,
  _sold_out,
  _mouse_enter,
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className="w-56 bg-white">
      {/* group img */}
      <div
        className="relative flew-row flex"
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      >
        <Image
          src="/assets/products/lays.svg"
          alt="Lays"
          width={150}
          height={150}
          className="ml-8"
        />
        {!_sold_out && _one_plus && (
          <div className="relative">
            <div className="absolute right-0 flex w-28 items-center justify-between rounded-full bg-red-600 ">
              <button className="ml-0 rounded-full pb-2.5 pl-3.5 pr-3.5 pt-2.5 text-sm text-white hover:bg-red-700">
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
              <p className="font-lg ml-3 font-medium text-white">1</p>
              <div className="ml-auto">
                <PlusButton onClick={() => {}} />
              </div>
            </div>
          </div>
        )}

        {!_sold_out && !_one_plus && mouseEnter && <PlusButton onClick={() => {}} />}

        {_sold_out && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-60">
          <div className="flex items-center">
            <div className="h-0.5 w-3 bg-white"></div>
            <p className="mx-1 text-sm font-bold text-white">
              SOLD OUT
            </p>
            <div className="h-0.5 w-3 bg-white"></div>
          </div>
        </div>
        )}
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
              <p className="ml-1 pt-5 text-xl font-bold  text-rose-600 line-through">
                $ 2.99
              </p>
              <p className="ml-2 mt-5 inline-block rounded-md bg-red-500 pl-2 pr-3 text-sm text-white">
                20% off
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
