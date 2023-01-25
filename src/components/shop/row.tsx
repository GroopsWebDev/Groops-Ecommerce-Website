import React from "react"

import Link from "next/link"

import Detail from "../product/detail"

import SeeAll from "../../../public/assets/shop/items/see-all.svg"


type props = { type: any }


const Row = ({ type }: props) => {

  return <>
    <div className="mt-10">
      <div className="flex flex-row flex-wrap space-x-5 mb-10 mt-10 justify-center">
        <Detail name="product1" price={1} />
        <Detail name="product1" price={1} />
        <Detail name="product1" price={1} />
        <Detail name="product1" price={1} />
      </div>
    </div>
  </>
}

export default Row