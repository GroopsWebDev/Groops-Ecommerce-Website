import { useRouter } from "next/router";
import Heart from "@public/assets/icons/heart.svg";
import Share from "@public/assets/icons/share.svg";
import Row from "~/components/product/row";

const Product = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <div className="mb-10 flex flex-row px-10 pt-24">
        <div className="flex w-1/3 justify-center ">
          <img src="/assets/dummy/product.png" className="w-full" />
        </div>

        <div className="flex w-2/3 items-center justify-center">
          <div className="w-3/5 ">
            <p>company</p>

            <h2 className="text-3xl font-bold">product name</h2>

            <h2 className="pt-5 text-3xl font-bold text-rose-600">$ 20</h2>

            <div className="mt-5 flex items-center gap-x-2 text-xs">
              <p className="rounded bg-gray-200 p-1 text-gray-500">700+ Sold</p>
              <p className="rounded bg-rose-200 p-1 text-rose-600">51 Left</p>
            </div>

            <button className="mt-5 w-full rounded-lg bg-rose-600 px-24 py-3 text-white">
              Add to Cart
            </button>

            <div className="mt-5 flex gap-x-10 text-gray-700">
              <div className="flex flex-row gap-x-2">
                <button>
                  <Heart className="w-5" />
                </button>
                <p> add to lovelist </p>
              </div>

              <div className="flex flex-row gap-x-2">
                <button>
                  <Share className="w-5" />
                </button>
                <p> share </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <Row section_category="Similar Items" />
    </>
  );
};

export default Product;
