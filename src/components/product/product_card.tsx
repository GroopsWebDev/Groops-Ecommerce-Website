import Heart from "@public/assets/icons/heart.svg";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  _on_discount: boolean;
}


export const ProductCard: React.FC<ProductCardProps> = ({ _on_discount }) => {
  return (
    <div className="w-52">
      {/* group img */}
      <Image
        src="/assets/products/lays.svg"
        alt="Lays"
        width={150}
        height={150}
        className="ml-8"
      />
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
          <p className="pt-5 text-xl font-bold font-light text-gray-400 text-rose-600 line-through">
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
