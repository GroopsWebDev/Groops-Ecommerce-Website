import React from "react"

import Link from "next/link"

import Detail from "./detail"

import SeeAll from "../../../public/assets/shop/items/see-all.svg"


type props = { category: any, url: string }



const Row = ({ category, url }: props) => {

  return <>
    <div className="mt-10">
      <div className="flex justify-center">
        {category}
      </div>
      <div className="flex flex-row flex-wrap space-x-10 mb-10 mt-10 justify-center">
        <Detail name="product1" price={1} />
        <Detail name="product1" price={1} />
        <Detail name="product1" price={1} />
        <Detail name="product1" price={1} />
        <Link className="w-20 mt-14 hover:scale-110 duration-300" href={url}><SeeAll /></Link>
      </div>
    </div>
  </>
}

export default Row