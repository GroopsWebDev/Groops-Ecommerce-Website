import React from "react";

import Carousel from "react-bootstrap/Carousel";

import { useRouter } from 'next/router';

import Advertisement from "../../../../public/assets/shop/advertisement/advertisement.svg";
import DummyRecent from "../../../../public/assets/shop/items/item.svg";
import DummyImage from "./dummy-image.svg";
import Heart from "../../../../public/assets/shop/items/heart.svg"
import Add from "../../../../public/assets/shop/items/add.svg"
import Minus from "../../../../public/assets/shop/items/minus.svg"

import HelpCenter from "../../../components/help/help-center";


const ProductImages = () => {
  return <>
    <Carousel>

      <Carousel.Item>
        <DummyImage className="w-full px-8" />
      </Carousel.Item>

      <Carousel.Item>
        <DummyImage className="w-full" />
      </Carousel.Item>

    </Carousel>
  </>
}

const Description = () => {

  const router = useRouter();
  const { id } = router.query;

  return <>
    <div className="">
      <h1 className="text-center text-7xl">{id}</h1>
      <h5 className="text-center">Drink Soft Drink</h5>
      <div className="flex flex-row justify-center gap-5">
        <h4 className="text-center">$7.99</h4>
        <Heart />
      </div>
      <h5 className="text-center mt-10">Choose Flavour</h5>

      <div className="flex flex-row gap-10 justify-center mt-3">
        <button className="bg-transparent text-green-400 font-semibold py-2 px-4 border square">
          Green
        </button>
        <button className="bg-transparent text-blue-400 font-semibold py-2 px-4 border square">
          Blue
        </button>
        <button className="bg-transparent text-red-400 font-semibold py-2 px-4 border square">
          Red
        </button>
      </div>

      <div className="flex flex-row gap-10 justify-center mt-5">
        <Minus />
        <Add />
        <button className="bg-black w-40 hover:scale-110 text-white font-bold py-2 px-8 square">Add to Cart</button>
      </div>
    </div>
  </>
}



export default function Item() {

  const router = useRouter();
  const { id } = router.query;

  return <>

    <div className="flex justify-center">
      <ProductImages />
    </div>
    <Description />


    <Advertisement className="w-full" />

    <HelpCenter />
  </>
}