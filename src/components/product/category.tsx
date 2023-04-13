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
import { string } from "zod";

const Catergory = () => {

  const style = "hover:scale-110 duration-300"

  return <>
    <div className="flex flex-wrap w-full gap-10 mt-10 mb-10">
      <Link href="/product/On Sale" className={style}> <OnSale /> </Link>
      <Link href="/product/Popular Products" className={style}> <PopularProduct /> </Link>
      <Link href="/product/New Arrivals" className={style}> <NewArrivals /> </Link>
      <Link href="/product/Drinks" className={style}> <Drinks /> </Link>
      <Link href="/product/Frozen Food" className={style}> <FrozenFood /> </Link>
      <Link href="/product/Groceries" className={style}> <Groceries /> </Link>
      <Link href="/product/Instant Food" className={style}> <InstantFood /> </Link>
      <Link href="/product/Kitchen" className={style}> <Kitchen /> </Link>
      <Link href="/product/Snacks" className={style}> <Snack /> </Link>
      <Link href="/product/Personal Care" className={style}> <Personal /> </Link>
    </div>
  </>

}

export default Catergory