import HeartIcon from "@public/assets/icons/heart.svg";
import PlusButton from "@public/assets/cart/plus-button.svg";
import MinusButton from "@public/assets/cart/minus-button.svg";
import ProductRow from "@components/product/row";

const Checkout = () => {
  const Right = () => {
    return (
      <div className="Right w-[30%] rounded bg-white p-5 text-gray-800">
        <p className="">group you joined</p>

        <div className="mt-3 flex gap-x-5">
          <img className="h-20 rounded-full" src="/assets/dummy/product.png" />
          <div className="flex flex-col gap-y-3">
            <p className="text-xl text-rose-600">Group name</p>
            <div className="flex gap-x-3">
              <p>21/50</p>
              <p className="rounded bg-rose-600 px-3 text-white">5% off</p>
            </div>
          </div>
        </div>

        <hr className="mt-3" />
        <div className="mt-2 flex justify-between">
          <p>Items subtotal</p>
          <p>$ 100</p>
        </div>

        <div className="mt-2 flex justify-between">
          <p>Tax</p>
          <p>$ 0.5</p>
        </div>

        <div className="mt-2 flex justify-between">
          <p>Shipping</p>
          <p>$ 100</p>
        </div>

        <hr />

        <div className="mt-2 flex justify-between">
          <p>Subtotal</p>
          <p>$ 102</p>
        </div>

        <div className="mt-2 flex justify-between">
          <p>Discount</p>
          <p className="text-rose-600">$ 10</p>
        </div>

        <hr />

        <div className="mt-5 flex justify-between">
          <p>Total</p>
          <p>$ 100</p>
        </div>
      </div>
    );
  };

  const Row = () => (
    <div className="my-5 flex flex-row justify-between">
      <div className="flex gap-x-5">
        <img className="" src="/assets/dummy/product.png" />
        <div className="flex flex-col justify-center gap-y-2">
          <p className="text-gray-400">Company name</p>
          <p>Product name</p>
          <p>Flavor</p>
          <button className="flex items-center">
            <HeartIcon className="h-5 mr-2" />
            <p>Add to love list</p>
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-10">
        <div className="flex items-center gap-x-3">
          <button className="flex items-center">
            <MinusButton className="h-10" />
          </button>
          <p>1</p>
          <button>
            <PlusButton className="h-10" />
          </button>
        </div>
        <p className="text-2xl font-bold text-rose-600">$100</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-gray-200 p-5">
        <h2 className="text-xl ">Checkout</h2>
        <p className="text-gray-400">Total 9 items</p>

        <div className="mt-10 flex gap-x-5">
          <div className="Left w-[70%] rounded bg-white p-5">
            <Row />
            <hr />
            <Row />
          </div>

          <Right />
        </div>
      </div>
      <ProductRow section_category="You may also like" />
      <hr />
      <ProductRow section_category="You recentely viewed" />
    </>
  );
};

export default Checkout;
