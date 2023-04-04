import React, { useEffect, useState } from "react";

import Link from "next/link";

import Detail from "./detail";

import SeeAll from "../../../public/assets/shop/items/see-all.svg";
import axios from "axios";
import ProductCard from "./ProductCard";

type props = { category: any };

const Row = ({ category }: props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.post(`/api/product/pagination`, {
        categoryName: "",
        perPage: 4,
      });
      if (res.status == 200) {
        setProduct(res.data.data);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
      <div className="mt-10">
        <div className="flex items-center justify-center">{category}</div>
        <div className="mb-10 mt-10 flex flex-row flex-wrap justify-center space-x-10">
          {product.map((i: any) => {
            return (
              <div key={i.skuid}>
              <ProductCard
                name={i.englishProductName}
                price={i.price}
                id={i.skuid}
                image={i.image}
              />
              </div>
            );
          })}
        </div>
        <div className="mb-10 mt-10 flex flex-row flex-wrap justify-center space-x-10">
          <Link className="w-25 mt-14" href="">
            <button className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              See More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Row;
