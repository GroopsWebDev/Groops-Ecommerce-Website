import React from "react";
import { useRouter } from 'next/router';

import Category from "../../components/product/category";
import Welcome from "../../components/welcome";
import Row from "../../components/shop/row"
import HelpCenter from "../../components/help/help-center"


const Shop = () => {

  const Block = () => {
    
    return <>
      <Row type={type} />
      <Row type={type} />
      <Row type={type} />
      <Row type={type} />
      <Row type={type} />
    </>
  }


  const router = useRouter();
  const { type } = router.query;

  return <>

    <Category />
    <Welcome />
    <h1 className="text-purple-500 text-center mt-20 mb-20">{type}</h1>

    <Block />

    <HelpCenter />
  </>
}

export default Shop;