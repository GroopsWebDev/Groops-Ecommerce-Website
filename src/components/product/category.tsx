import React from "react";

import OnSale from "../../../public/assets/category/on-sale.svg"
import PopularProduct from "../../../public/assets/category/popular-product.svg"
import Drinks from "../../../public/assets/category/drinks.svg"
import FrozenFood from "../../../public/assets/category/frozen-food.svg"
import Groceries from "../../../public/assets/category/groceries.svg"
import InstantFood from "../../../public/assets/category/instant-food.svg"
import Kitchen from "../../../public/assets/category/kitchen.svg"
import NewArrivals from "../../../public/assets/category/new-arrivals.svg"
import Snack from "../../../public/assets/category/snack.svg"

const Catergory = () => {

  return <>
    <div className="flex flex-wrap gap-10">
      <OnSale />
      <PopularProduct />
      <Drinks />
      <FrozenFood />
      <Groceries />
      <InstantFood />
      <Kitchen />
      <NewArrivals />
      <Snack />
    </div>
  </>

}

export default Catergory