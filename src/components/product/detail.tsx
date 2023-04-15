import React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";

type props = { id: string; name: string; price: number; image: string };

const Detail = ({ id, name, price, image }: props) => {
  const url = "https://api.gr-oops.com/" + image;

  const [heart, setHeart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

// const Detail = ({ name, price }: props) => {
//   const [heart, setHeart] = useState(false)

  // return <>
  //   <div className="relative text-2xl mb-10" >
  //     <Link href="/product/item/id"><Item className="w-1/1 hover:scale-105 duration-300" /></Link>
  //     <button className="absolute bottom-16 right-5" onClick={() => { setHeart(!heart) }}>
  //       {heart ? <HeartRed className="w-9" /> : <Heart className="w-9" />}
  //     </button>

  return (
    <>
      <div className="relative mb-10 overflow-hidden rounded-lg bg-white text-2xl shadow-lg">
        <Link href={`/product/view/${id}`}>
          <img src={url} className="h-64 w-full object-cover object-center" />
        </Link>
        <button
          className="absolute bottom-16 right-5"
          onClick={() => {
            setHeart(!heart);
          }}
        >
          {heart ? (
            <AiFillHeart style={{ color: "red" }} />
          ) : (
            <AiOutlineHeart style={{ color: "gray", border: "black" }} />
          )}
        </button>

        <div className="mr-6 mb-2 mt-1 flex flex-row gap-16 text-xs">
          <div className="flex flex-col space-y-0">
            <p className="ml-3  text-blue-400">{name}</p>
            <p className="ml-3 ">${price}</p>
          </div>
          <button
            className="text-4xl text-gray-500"
            onClick={handleDecreaseQuantity}
          >
            <AiOutlineMinusSquare />
          </button>
          <span className="ml-3 mt-3  text-blue-400">{quantity}</span>
          <button
            className="text-4xl text-gray-500"
            onClick={handleIncreaseQuantity}
          >
            <AiOutlinePlusSquare />
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
