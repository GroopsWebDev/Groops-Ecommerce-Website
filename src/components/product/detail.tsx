import React from "react"
import { useState } from "react";

import Container from "react-bootstrap/Container";

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
      <Item className="w-100 h-100" />
      <button className="absolute bottom-10 right-5" onClick={() => { setHeart(!heart) }}>
        {heart ? <HeartRed /> : <Heart />}
      </button>

      <div className="flex gap-20 text-xs">
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