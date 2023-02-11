import React from "react";

import Carousel from "react-bootstrap/Carousel";

import { useRouter } from 'next/router';

import Advertisement from "../../../../public/assets/shop/advertisement/advertisement.svg";

import DummyRecent from "../../../../public/assets/shop/items/item.svg";

import HelpCenter from "../../../components/help/help-center";


const ProductImages = () => {
  return <>
    <Carousel>

      <Carousel.Item>
      </Carousel.Item>

      <Carousel.Item>
      </Carousel.Item>

    </Carousel>
  </>
}




export default function Item() {

  const router = useRouter();
  const { id } = router.query;

  return <>
    <h1 className = "text-center">{id}</h1>

    <ProductImages />

    <Advertisement className="w-full" />

    <HelpCenter />
  </>
}