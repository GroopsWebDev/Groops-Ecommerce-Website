import React from "react"

import Link from "next/link"

import Detail from "./detail"
import SeeAll from "../../../public/assets/shop/items/see-all.svg"


const Row = ()=> {

  return <>
    <div className = "flex flex-wrap space-x-5 mb-10 ml-10 mt-10">
      <Detail name = "product1" price = {1} heart = {false} />
      <Detail name = "product1" price = {1} heart = {false}/>
      <Detail name = "product1" price = {1} heart = {false} />
      <Detail name = "product1" price = {1} heart = {false}/>
      <SeeAll className = "w-20"/>
    </div>
  </>
}

export default Row