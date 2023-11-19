import { LeftButton, RightButton, Filter } from "../others/buttons";
import Link from "next/link";
import Arrow from "@public/assets/icons/arrow.svg";
import Heart from "@public/assets/icons/heart.svg";
import ProductCard from "./card";

interface Props {
  section_category: string;
}

const Row: React.FC<Props> = ({ section_category }) => {
  return (
    <>
      <div className="z-0 bg-white p-10">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h1 className=" text-2xl font-bold">{section_category}</h1>
            <div className="flex flex-row gap-x-2 pt-2">
              <Filter category="snack" />
              <Filter category="Instant Food" />
              <Filter category="Personal Care" />
              <Filter category="Beauty" />
            </div>
          </div>

          <div className="flex flex-row items-center">
            <Link href="" className="mr-5 flex items-center text-primary-main">
              <p className="mr-2">see all</p>
              <Arrow />
            </Link>

            <LeftButton />
            <RightButton />
          </div>
        </div>

        <div className="mt-10 flex flex-row items-center justify-between">
          <ProductCard
            _on_discount={false}
            _one_plus={false}
            _mouse_enter={false}
          />
          <ProductCard
            _on_discount={false}
            _one_plus={false}
            _mouse_enter={true}
          />
          <ProductCard
            _on_discount={true}
            _one_plus={true}
            _mouse_enter={false}
          />
          <ProductCard
            _on_discount={false}
            _one_plus={false}
            _mouse_enter={false}
          />
          <ProductCard
            _on_discount={false}
            _one_plus={false}
            _mouse_enter={false}
          />
        </div>
      </div>
    </>
  );
};

export default Row;
