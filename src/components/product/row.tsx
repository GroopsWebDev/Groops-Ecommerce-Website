import React, { useEffect, useState } from "react";

import Link from "next/link";

import Detail from "./detail";

import SeeAll from "../../../public/assets/shop/items/see-all.svg";
import axios from "axios";

type props = { category: any };

const Row = ({ category }: props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.post(`/api/product/pagination`, {
        categoryName: "",
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
              <Detail
                name={i.englishProductName}
                price={i.price}
                id={i.skuid}
                image={i.image}
              />
            );
          })}
        </div>
        <div className="mb-10 mt-10 flex flex-row flex-wrap justify-center space-x-10">
          <Link className="mt-14 w-20" href="">
            <SeeAll />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Row;
