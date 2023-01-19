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
      <Link href="/"> <OnSale /> </Link>
      <Link href="/"> <PopularProduct /> </Link>
      <Link href="/"> <Drinks /> </Link>
      <Link href="/"> <FrozenFood /> </Link>
      <Link href="/"> <Groceries /> </Link>
      <Link href="/"> <InstantFood /> </Link>
      <Link href="/"> <Kitchen /> </Link>
      <Link href="/"> <NewArrivals /> </Link>
      <Link href="/"> <Snack /> </Link>
      <Link href="/"> <Personal /> </Link>
    </div>
  </>

}

export default Catergory