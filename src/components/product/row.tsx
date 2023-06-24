import { LeftButton, RightButton, Filter } from "../buttons";
import Link from "next/link";
import Arrow from "@public/assets/icons/arrow.svg";
import Heart from "@public/assets/icons/heart.svg";
import { ProductCard } from "./product_card";

interface Props {
  category: string;
}

const Row: React.FC<Props> = ({ category }) => {
  return (
    <>
      <div className="z-0 p-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h1 className=" text-2xl">{category}</h1>
            <div className="flex flex-row gap-x-2 pt-2">
              <Filter category="snack" />
              <Filter category="Instant Food" />
              <Filter category="Personal Care" />
              <Filter category="Beauty" />
            </div>
          </div>

          <div className="flex flex-row items-center">
            <Link href="" className="mr-5 flex items-center text-rose-600">
              <p className="mr-2">see all</p>
              <Arrow />
            </Link>

            <LeftButton />
            <RightButton />
          </div>
        </div>

        <div className="mt-10 flex flex-row items-center justify-between">
          <ProductCard _on_discount={false} />
          <ProductCard _on_discount={false} />
          <ProductCard _on_discount={true} />
          <ProductCard _on_discount={false} />
          <ProductCard _on_discount={false} />
        </div>
      </div>
    </>
  );
};

export default Row;
