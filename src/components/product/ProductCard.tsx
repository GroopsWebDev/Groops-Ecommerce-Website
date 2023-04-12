import React, { useEffect } from "react";
import { useState } from "react";
import Heart from "../../../public/assets/shop/items/heart.svg";
import HeartRed from "../../../public/assets/shop/items/heart-red.svg";
import Add from "../../../public/assets/shop/items/add.svg";
import Minus from "../../../public/assets/shop/items/minus.svg";
import {
  AiFillHeart,
  AiFillMinusSquare,
  AiOutlineHeart,
  AiOutlineMinusSquare,
  AiOutlinePlusSquare,
} from "react-icons/ai";
import Link from "next/link";

type props = { id: string; name: string; price: number; image: string };

const ProductCard = ({ id, name, price, image }: props) => {
  const [heart, setHeart] = useState(false);
  let url = "https://api.gr-oops.com/" + image;
  const [quantity, setQuantity] = useState(1);
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  return (
    <>
      <div className="relative mb-10 overflow-hidden rounded-lg bg-white text-2xl shadow-lg">
        <Link href={`/product/item/${id}`}>
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
            <h3 className="ml-3 text-sm text-gray-700">
              <span aria-hidden="true" className=" inset-0"></span>
              {name}
            </h3>
            <p className="ml-3 text-sm font-medium text-gray-900">${price}</p>
          </div>
          {/* <button
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
          </button> */}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
