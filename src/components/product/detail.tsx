import React from "react"

import Container from "react-bootstrap/Container";

import Item from "../../../public/assets/shop/items/item.svg"
import Heart from "../../../public/assets/shop/items/heart.svg"
import HeartRed from "../../../public/assets/shop/items/heart-red.svg"
import Add from "../../../public/assets/shop/items/add.svg"
import Minus from "../../../public/assets/shop/items/minus.svg"

type props = { name: string, price: number, heart: boolean }

const Detail = ({ name, price, heart }: props) => {
  return <>
    <div className="relative text-2xl mb-10" >
      <Item className="w-100 h-100" />
      {heart ? <HeartRed className="absolute bottom-10 right-5" /> : <Heart className="absolute bottom-10 right-5" />}
      <div className="flex gap-20 text-xs">
        <div className="flex flex-col space-y-0">
          <p className="ml-3  text-blue-400">{name}</p>
          <p className="ml-3 ">${price}</p>
        </div>
        <Add />
        <Minus />
      </div>
    </div>
  </>
}

export default Detail