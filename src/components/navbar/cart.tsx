import Cross from "@public/assets/icons/cross.svg";

const Cart = ({
  showCart,
  setShow,
}: {
  showCart: boolean;
  setShow: (show: boolean) => void;
}) => {
  const CrossButton = () => (
    <button className="absolute left-5 top-5" onClick={() => setShow(false)}>
      <Cross />
    </button>
  );

  const Row = () => (
    <>
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-x-3">
          <img src="/assets/dummy/product.png" className="w-1/3" />
          <div className="flex flex-col ">
            <p className="text-sm text-gray-400">company</p>
            <p className="text-lg ">Product Name</p>
            <p className="text-sm text-gray-800">Flavor</p>
          </div>
        </div>

        <p>x4</p>
      </div>
      <hr />
    </>
  );

  if (!showCart) return null;

  return (
    <>
      <div className="fixed right-0 top-0 z-50 h-screen w-1/3 bg-white text-gray-800 shadow-xl">
        <CrossButton />
        <h2 className="mt-3 text-center">Shopping Cart</h2>

        <hr className="mt-5" />

        <div className="flex gap-x-5 p-5">
          <div className="w-1/2">
            <p className="text-sm">groups you joined</p>
            <div className="mt-3 flex items-center gap-x-2">
              <img
                src="/assets/dummy/product.png"
                className="w-1/3 rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-lg text-rose-600">Group Name</p>
                <div className="mt-2 flex gap-x-2">
                  <p className=" text-sm text-gray-400">21/50</p>
                  <p className="rounded bg-rose-600 px-2 text-sm text-white">
                    50 % off
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <p className="text-sm">Ends in :</p>
            <div className="mt-5 flex gap-x-2">
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-rose-600">03</p>
                <p className="text-xs text-gray-400">Days</p>
              </div>
              <p className="text-3xl font-bold text-rose-600"> : </p>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-rose-600">07</p>
                <p className="text-xs text-gray-400">Hour</p>
              </div>
              <p className="text-3xl font-bold text-rose-600"> : </p>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-rose-600">20</p>
                <p className="text-xs text-gray-400">Minute</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-2" />

        <div className="mt-3 h-1/2 overflow-auto">
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </div>

        <div className="flex justify-center p-5 mt-5">
          <button className="w-[90%] rounded-lg bg-rose-600 p-3 text-white">
            Go to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
