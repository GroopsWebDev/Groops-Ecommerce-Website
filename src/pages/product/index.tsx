import ProductCard from "~/components/product/card";

const Products = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];

  const Selector = ({ label }: { label: string }) => (
    <div className="flex flex-row items-center justify-center gap-x-2 ">
      <p className="font-medium text-gray-900 ">{label}:</p>

      <select className="rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-900">
        <option defaultValue={label} value={label}>
          On Sale
        </option>
      </select>
    </div>
  );

  const Side = () => (
    <div className="flex w-[20%] flex-col items-center text-gray-800">
      <div className="mt-20">
        <img src="assets/dummy/product.png" className="rounded-full" />
      </div>

      <p className="mt-5 text-xl">Group name</p>

      <div className="mt-3 flex flex-row gap-x-3">
        <p className="rounded-full bg-purple-300 px-2 text-purple-800">Candy</p>
        <p className="rounded-full bg-purple-300 px-2 text-purple-800">
          Snacks
        </p>
      </div>

      <p className="mt-5 text-gray-400">max possible discount : 30%</p>

      <div className="flex flex-row gap-x-3">
        <p>21/50</p>
        <p className="rounded bg-rose-600 px-2 text-white">5% off</p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-y-3">
        <button>
          <p>All Results(10)</p>
        </button>
        <button>
          <p>Snacks(10)</p>
        </button>
        <button>
          <p>Candies(10)</p>
        </button>
        <button>
          <p>Instant Food(10)</p>
        </button>
        <button>
          <p>Beauty(10)</p>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex h-full flex-row">
        <Side />

        <div className="h-100 border-l border-gray-300"></div>

        <div className="w-[80%] p-5">
          <div className="mt-10 flex flex-row gap-x-5">
            <Selector label="Sale" />
            <Selector label="Status" />
            <Selector label="Vegan" />
            <Selector label="Origin" />

            <Selector label="Sort by" />
          </div>

          <div className="mb-10 mt-10 grid grid-cols-4 place-items-center gap-x-5 gap-y-10 p-10 pt-5">
            {products.map((product, index) => (
              <ProductCard
                _on_discount={false}
                _one_plus={false}
                _mouse_enter={false}
                _sold_out={false}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
