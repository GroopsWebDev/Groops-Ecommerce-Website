import React from "react";
import { useState } from "react"

import { useRouter } from 'next/router';

import HelpCenter from "../../../components/help/help-center";
import Advertisement from "../../../../public/assets/shop/advertisement/advertisement.svg";
import DummyRecent from "../../../../public/assets/shop/items/item.svg";
import DummyImage from "./dummy-image.svg";
import Heart from "../../../../public/assets/shop/items/heart.svg"
import Add from "../../../../public/assets/shop/items/add.svg"
import Minus from "../../../../public/assets/shop/items/minus.svg"
import Share from "../../../../public/assets/shop/items/share.svg"
import AddCart from "../../../../public/assets/shop/items/add-to-cart.svg"
import Policy from "../../../../public/assets/product/item/policy.svg"
import Spec from "../../../../public/assets/product/item/spec.svg"
import OnPolicy from "../../../../public/assets/product/item/policy-on.svg"
import OnSpec from "../../../../public/assets/product/item/spec-on.svg"
import Policies from "../../../../public/assets/product/item/policies.svg"
import Write from "../../../../public/assets/product/item/write-review.svg"

const ProductImages = () => {
  return <>
    <DummyImage></DummyImage>
  </>
}

const Description = () => {

  return <>
    <h1>Product Name</h1>
    <p className="mt-3">Type Subtype</p>

    <div className="flex flex-row gap-x-9">
      <p className="mt-3">$19.99</p>
      <Heart className="w-7"></Heart>
      <Share className="mt-3"></Share>
    </div>

    <div className="flex flex-row gap-x-9 mt-5">
      <Add className="mt-1"></Add>
      <Minus className="mt-1"></Minus>
      <button><AddCart></AddCart></button>
    </div>
  </>
}

const Specs = () => {

  const style = "flex flex-col justify-center place-items-center gap-y-3"
  return <>

    <div className="flex flex-row gap-10 justify-center mt-20 gap-x-64">

      <div className={style}>
        <h4>Rating</h4>
        <h4 className="text-purple">4.5</h4>
      </div>

      <div className={style}>
        <h4>Place of Product</h4>
        <h4 className="text-purple">TAIWAN</h4>
      </div>

      <div className={style}>
        <h4>Category</h4>
        <h4 className="text-purple">SOFT DRINK</h4>
      </div>

      <div className={style}>
        <h4>Volume</h4>
        <h4 className="text-purple">300g/bag</h4>
      </div>
    </div>

    <div className="flex flex-row justify-center mt-20"><Write></Write></div>

  </>
}



export default function Item() {

  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState(0);

  return <>

    <div className="grid grid-cols-2 place-items-center">
      <ProductImages></ProductImages>
      <div><Description></Description></div>
    </div>

    <div className="flex flex-row gap-x-72 justify-center mt-16">
      <button onClick={() => setPage(0)}>
        {page ? <Spec></Spec> : <OnSpec></OnSpec>}
      </button>
      <button onClick={() => setPage(1)}>
        {(1 - page) ? <Policy></Policy> : <OnPolicy></OnPolicy>}
      </button>
    </div>
    <hr />

    <div>
      {(1 - page) ? <Specs></Specs> :
        <Policies className="ml-20 mr-20 mt-20"></Policies>}
    </div>

    <Advertisement className="w-full mt-20" />

    <HelpCenter />
  </>
}