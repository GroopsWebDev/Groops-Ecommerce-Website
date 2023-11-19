import HeartIcon from "@public/assets/icons/heart.svg";
import PlusButton from "@public/assets/cart/plus-button.svg";
import MinusButton from "@public/assets/cart/minus-button.svg";
import ProductRow from "@components/product/row";
import Link from "next/link";

const Cart = () => {
  const Right = () => {
    return (
      <div className="Right w-[30%] rounded bg-white p-5 text-gray-800">
        <p className="">group you joined</p>

        <div className="mt-3 flex gap-x-5">
          <img className="h-20 rounded-full" src="/assets/dummy/product.png" />
          <div className="flex flex-col gap-y-3">
            <p className="text-xl text-primary-main">Group name</p>
            <div className="flex gap-x-3">
              <p>21/50</p>
              <p className="rounded bg-primary-main px-3 text-white">5% off</p>
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
          <p className="text-primary-main">$ 10</p>
        </div>

        <hr />

        <div className="mt-5 flex justify-between">
          <p>Total</p>
          <p>$ 100</p>
        </div>

        <div className="mt-2 flex justify-center">
          <Link
            href="/checkout"
            className="flex w-full justify-center rounded bg-primary-main p-2 text-white"
          >
            Checkout
          </Link>
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
            <HeartIcon className="mr-2 h-5" />
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
        <p className="text-2xl font-bold text-primary-main">$100</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-gray-200 p-5">
        <h2 className="text-xl ">Cart</h2>
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

export default Cart;
