import React from "react"

import Link from "next/link"

import Detail from "./detail"

import SeeAll from "../../../public/assets/shop/items/see-all.svg"


type props = { category: any }


const Row = ({ category }: props) => {

  return <>
    <div className="mt-10">
      <div className="flex justify-center">
        {category}
      </div>
      <div className="flex flex-wrap space-x-5 mb-10 justify-center">
        <Detail name="product1" price={1}  />
        <Detail name="product1" price={1} />
        <Detail name="product1" price={1} />
        <Detail name="product1" price={1}/>
        <SeeAll className="w-20" />
      </div>
    </div>
  </>
}

export default Row