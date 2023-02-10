import React from "react";

import Link from "next/link";

import OnSale from "../../../public/assets/category/on-sale.svg"
import PopularProduct from "../../../public/assets/category/popular-product.svg"
import Drinks from "../../../public/assets/category/drinks.svg"
import FrozenFood from "../../../public/assets/category/frozen-food.svg"
import Groceries from "../../../public/assets/category/groceries.svg"
import InstantFood from "../../../public/assets/category/instant-food.svg"
import Kitchen from "../../../public/assets/category/kitchen.svg"
import NewArrivals from "../../../public/assets/category/new-arrivals.svg"
import Snack from "../../../public/assets/category/snack.svg"
import Personal from "../../../public/assets/category/personal-care.svg"

const Catergory = () => {

  return <>
    <div className="flex flex-wrap w-full gap-10 mt-10 mb-10">
      <Link href="/product/OnSale"> <OnSale /> </Link>
      <Link href="/product/PopularProduct"> <PopularProduct /> </Link>
      <Link href="/product/Drinks"> <Drinks /> </Link>
      <Link href="/product/FrozenFood"> <FrozenFood /> </Link>
      <Link href="/product/Groceries"> <Groceries /> </Link>
      <Link href="/product/InstantFood"> <InstantFood /> </Link>
      <Link href="/product/Kitchen"> <Kitchen /> </Link>
      <Link href="/product/NewArrivals"> <NewArrivals /> </Link>
      <Link href="/product/Snack"> <Snack /> </Link>
      <Link href="/product/Personal"> <Personal /> </Link>
    </div>
  </>

}

export default Catergory