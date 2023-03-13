import React from "react"
import { useState } from "react";

import Item from "../../../public/assets/shop/items/item.svg"
import Heart from "../../../public/assets/shop/items/heart.svg"
import HeartRed from "../../../public/assets/shop/items/heart-red.svg"
import Add from "../../../public/assets/shop/items/add.svg"
import Minus from "../../../public/assets/shop/items/minus.svg"

type props = { name: string, price: number }

const Detail = ({ name, price }: props) => {
  const [heart, setHeart] = useState(false)

  return <>
    <div className="relative text-2xl mb-10" >
      <Item className="w-1/1" />
      <button className="absolute bottom-16 right-5" onClick={() => { setHeart(!heart) }}>
        {heart ? <HeartRed className="w-9" /> : <Heart className="w-9" />}
      </button>

      <div className="flex flex-row gap-16 text-xs mr-6 mt-1">
        <div className="flex flex-col space-y-0">
          <p className="ml-3  text-blue-400">{name}</p>
          <p className="ml-3 ">${price}</p>
        </div>
        <Minus />
        <Add />
      </div>
    </div>
  </>
}

export default Detail