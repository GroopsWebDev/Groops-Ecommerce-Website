import ProductRow from "../../components/product/row";
import ProductCard from "../../components/product/card";

const Card = () => (
  <div className="bg-white p-5">
    <ProductCard _on_discount={true} _one_plus={true} _mouse_enter={true} />
  </div>
);

const Filter = ({ label }: { label: string }) => (
  <button>
    <p
      className="rounded-full border border-gray-300 bg-white 
                  px-5 py-1 text-gray-500"
    >
      {label}
    </p>
  </button>
);

const LoveList: React.FC = () => {
  return (
    <div className="bg-gray-200">

      <div className="ml-5 pt-10">
        <h2 className="text-xl">Your Love List</h2>
        <p className="text-sm text-gray-400">Total 8 items</p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-5 pt-5">
        <Filter label="All" />
        <Filter label="Snacks" />
        <Filter label="Candies" />
        <Filter label="Instant Foods" />
        <Filter label="Personal Care" />
        <Filter label="Beauty" />
        <Filter label="Home & Life" />
      </div>

      <div className="grid grid-cols-4 place-items-center items-center gap-x-0 gap-y-10 p-20 pt-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <ProductRow section_category="You may also like" />
    </div>
  );
};

export default LoveList;
