import { useRouter } from "next/router";
import Heart from '@public/assets/icons/heart.svg';
import Share from '@public/assets/icons/share.svg';
import Row from "~/components/product/row";


const Product = () => {

  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  return <>
    <div className="flex flex-row pt-24 mb-10 px-10">

      <div className="w-1/3 bg-red-500 flex justify-center">
        <img
          src="/assets/dummy/product.png"
          className="w-full"
        />
      </div>

      <div className="w-2/3 bg-yellow-500 flex justify-center items-center">
        <div className="w-3/5 bg-green-200">
          <p>company</p>

          <h2 className="text-3xl font-bold">product name</h2>

          <h2 className="text-rose-600 text-3xl font-bold pt-5">$ 20</h2>

          <button className="mt-5 py-3 px-24 text-white bg-rose-600 w-full rounded-lg">
            Add to Cart
          </button>

          <div className="flex mt-5 gap-x-10 text-gray-700">

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
};

export default Product;