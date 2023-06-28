import ProductRow from "../../components/product/row";
import ProductCard from "../../components/product/card";

const Card = () => (
  <ProductCard _on_discount={true} _one_plus={true} _mouse_enter={true} />
);

const LoveList: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="ml-5">
        <h2 className="text-xl">Your Love List</h2>
        <p className="text-sm text-gray-400">Total 8 items</p>
      </div>

      <div className="grid grid-cols-4 place-items-center items-center gap-x-0 gap-y-10 p-10">
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
