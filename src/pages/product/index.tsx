import ProductCard from "~/components/product/card";


const Products = () => {

  const Row = () => (
    <div className="flex flex-row items-center justify-between">
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
  );

  const Selector = ({ label }: { label: string }) => (
    <div className="flex flex-row items-center justify-center gap-x-2 ">

      <p className="font-medium text-gray-900 ">
        {label}:
      </p>

      <select id="small" className="p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
        <option selected>On Sale</option>
      </select>
    </div>

  );

  return <>

    <div className="h-full flex flex-row">

      <div className="w-[20%] flex flex-col items-center text-gray-800">


        <div className="mt-20">
          <img src="assets/dummy/product.png" className="rounded-full" />
        </div>

        <p className="mt-5 text-xl">Group name</p>

        <div className="flex flex-row gap-x-3 mt-3">
          <p className="text-purple-800 bg-purple-300 px-2 rounded-full">Candy</p>
          <p className="text-purple-800 bg-purple-300 px-2 rounded-full">Snacks</p>
        </div>

        <p className="mt-5 text-gray-400">max possible discount : 30%</p>

        <div className="flex flex-row gap-x-3">
          <p>21/50</p>
          <p className="bg-rose-600 text-white rounded px-2">5% off</p>
        </div>

        <div className="mt-10">
          <button>
            <p>All Results(10)</p>
            <p>Snacks(10)</p>
            <p>Candies(10)</p>
            <p>Instant Food(10)</p>
            <p>Beauty(10)</p>
          </button>
        </div>

      </div>

      <div className="h-100 border-l border-gray-300"></div>

      <div className="w-[80%] p-5">

        <div className="flex flex-row flex-wrap mt-10 gap-x-3">
          <Selector label="Sale" />
          <Selector label="Status" />
          <Selector label="Vegan" />
          <Selector label="Origin" />

          <Selector label="Sort by" />
        </div>

        <div className="flex flex-col gap-y-10 mt-10">
          <Row />
          <Row />
          <Row />
        </div>

      </div>

    </div>
  </>
};


export default Products