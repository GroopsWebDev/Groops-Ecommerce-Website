import React from "react";

import Carousel from "react-bootstrap/Carousel";

import { useRouter } from 'next/router';

import Advertisement from "../../../../public/assets/shop/advertisement/advertisement.svg";
import DummyRecent from "../../../../public/assets/shop/items/item.svg";
import DummyImage from "./dummy-image.svg";
import Heart from "../../../../public/assets/shop/items/heart.svg"
import Add from "../../../../public/assets/shop/items/add.svg"
import Minus from "../../../../public/assets/shop/items/minus.svg"
import Share from "../../../../public/assets/shop/items/share.svg"
import AddCart from "../../../../public/assets/shop/items/add-to-cart.svg"

import HelpCenter from "../../../components/help/help-center";
import { Grid } from "@mui/material";


const ProductImages = () => {
  return <>
    <DummyImage></DummyImage>
  </>
}

const Description = () => {

  const router = useRouter();
  const { id } = router.query;

  return <>
    <h1>Product Name</h1>
    <p className="mt-3">Type Subtype</p>

    <div className="flex flex-row gap-x-9">
      <p className="mt-3">$19.99</p>
      <Heart className = "w-7"></Heart>
      <Share className="mt-3"></Share>
    </div>

    <div className="flex flex-row gap-x-9 mt-5">
      <Add className="mt-1"></Add>
      <Minus className="mt-1"></Minus>
      <button><AddCart></AddCart></button>
    </div>
  </>
}



export default function Item() {

  const router = useRouter();
  const { id } = router.query;

  return <>

    <div className="grid grid-cols-2 place-items-center">
      <ProductImages></ProductImages>
      <div><Description></Description></div>
    </div>
    
    <hr/>

    <Advertisement className="w-full" />

    <HelpCenter />
  </>
}