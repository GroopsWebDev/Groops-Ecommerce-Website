import React from "react";

import Category from "../components/product/category";
import Welcome from "../components/welcome"
import Detail from "../components/product/detail"
import Row from "../components/product/row"
import Place from "../components/product/places"

import OnSale from "../../public/assets/category/on-sale.svg"
import PopularProduct from "../../public/assets/category/popular-product.svg"
import Drinks from "../../public/assets/category/drinks.svg"
import FrozenFood from "../../public/assets/category/frozen-food.svg"
import Groceries from "../../public/assets/category/groceries.svg"
import InstantFood from "../../public/assets/category/instant-food.svg"
import Kitchen from "../../public/assets/category/kitchen.svg"
import NewArrivals from "../../public/assets/category/new-arrivals.svg"
import Snack from "../../public/assets/category/snack.svg"

import Advertisement from "../../public/assets/shop/advertisement.svg"


// import  from "../../public/assets/";

const Product = () => {

  const style : string = "ml-10 mt-10"
  return <>

    <Category/>

    <Welcome />

    <Row category={<OnSale className = {style} />} />
    <Row category={<PopularProduct className = {style} />} />
    <Row category={<NewArrivals className = {style} />} />

    <Place />

    <Row category={<Drinks className = {style} />} />
    <Row category={<PopularProduct className = {style} />} />
    <Row category={<NewArrivals className = {style} />} />

    <Advertisement className = "w-full" />
  </>


};

export default Product;
