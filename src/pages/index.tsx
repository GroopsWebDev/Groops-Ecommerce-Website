import GroupsRow from '../components/group/row';
import ProductsRow from '../components/product/row';


export default function Home() {
  return (
    <div>

      <hr />

      <GroupsRow />

      <hr />

      <ProductsRow category='Selling Fast'/>
      <ProductsRow category='Limited Edition'/>
    </div>
  )
}
