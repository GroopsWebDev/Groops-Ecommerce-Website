import React from "react";

import Category from "../components/product/category";
import Welcome from "../components/welcome"
import Row from "../components/product/row"
import Place from "../components/product/places"
import HelpCenter from "../components/help/help-center"

import OnSale from "../../public/assets/shop/category/sale.svg"
import PopularProduct from "../../public/assets/shop/category/popular.svg"
import Drinks from "../../public/assets/shop/category/drinks.svg"
import FrozenFood from "../../public/assets/shop/category/frozen.svg"
import InstantFood from "../../public/assets/shop/category/instant.svg"
import Kitchen from "../../public/assets/shop/category/kitchen.svg"
import NewArrivals from "../../public/assets/shop/category/new.svg"
import Snack from "../../public/assets/shop/category/snack.svg"
import Personal from "../../public/assets/shop/category/personal.svg"

import Advertisement from "../../public/assets/shop/advertisement/advertisement.svg"


const Product = () => {

  const style: string = ""
  return <>

    <Category />

    <Welcome />

    <Row category={<OnSale className={style} />} url="product/On Sale" />
    <Row category={<PopularProduct className={style} />} url="product/Popular Product" />
    <Row category={<NewArrivals className={style} />} url="product/New Arrivals" />

    <Place />

    <Row category={<Drinks className={style} />} url="product/Drinks" />
    <Row category={<Snack className={style} />} url="product/Snacks" />
    <Row category={<InstantFood className={style} />} url="product/Instant Food" />

    <Advertisement className="w-full" />

    <Row category={<FrozenFood className={style} />} url="product/Frozen Food" />
    <Row category={<Kitchen className={style} />} url="product/Kitchen" />
    <Row category={<Personal className={style} />} url="product/Personal Care" />

    <HelpCenter />
  </>


};

export default Product;
