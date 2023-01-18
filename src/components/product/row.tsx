import React from "react"

import Link from "next/link"

import Detail from "./detail"

import SeeAll from "../../../public/assets/shop/items/see-all.svg"
import OnSale from "../../../public/assets/category/on-sale.svg"


const Row = ()=> {

  return <>
  <OnSale className = "ml-10 mb-0"/>
    <div className = "flex flex-wrap space-x-5 mb-10 justify-center">
      <Detail name = "product1" price = {1} heart = {false} />
      <Detail name = "product1" price = {1} heart = {false}/>
      <Detail name = "product1" price = {1} heart = {true} />
      <Detail name = "product1" price = {1} heart = {false}/>
      <SeeAll className = "w-20"/>
    </div>
  </>
}

export default Row