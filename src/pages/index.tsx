import GroupsRow from "../components/group/row";
import ProductsRow from "../components/product/row";

export default function Home() {
  return (
    <div>
      <hr />

      <GroupsRow />

      <hr />

      <ProductsRow section_category="Selling Fast" />
      <ProductsRow section_category="Limited Edition" />
    </div>
  );
}
