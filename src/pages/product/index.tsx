import React, { useEffect, useState } from "react";

import Category from "../../components/product/category";
import Welcome from "../../components/welcome";
import Row from "../../components/product/row";
import Place from "../../components/product/places";
import HelpCenter from "../../components/help/help-center";

import OnSale from "../../../public/assets/shop/category/sale.svg";
import PopularProduct from "../../../public/assets/shop/category/popular.svg";
import Drinks from "../../../public/assets/shop/category/drinks.svg";
import FrozenFood from "../../../public/assets/shop/category/frozen.svg";
import InstantFood from "../../../public/assets/shop/category/instant.svg";
import Kitchen from "../../../public/assets/shop/category/kitchen.svg";
import NewArrivals from "../../../public/assets/shop/category/new.svg";
import Snack from "../../../public/assets/shop/category/snack.svg";
import Personal from "../../../public/assets/shop/category/personal.svg";

import Advertisement from "../../../public/assets/shop/advertisement/advertisement.svg";

const Product = () => {
  const style = "";
  return (
    <>
      <Category />

      <Welcome />

      <Row category={<OnSale />} />
      <Row category={<PopularProduct className={style} />} />
      <Row category={<NewArrivals className={style} />} />

      <Place />

      <Row category={<Drinks className={style} />} />
      {/* <Row category={<Snack className={style} />} /> */}
      <Row category={<InstantFood className={style} />} />

      <Advertisement className="w-full" />

      <Row category={<FrozenFood className={style} />} />
      <Row category={<Kitchen className={style} />} />
      <Row category={<Personal className={style} />} />

      <HelpCenter />
    </>
  );
};

export default Product;
