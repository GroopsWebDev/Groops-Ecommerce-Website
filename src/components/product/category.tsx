import React, { useEffect, useState } from "react";

import Link from "next/link";

import OnSale from "../../../public/assets/category/on-sale.svg";
import PopularProduct from "../../../public/assets/category/popular-product.svg";
import Drinks from "../../../public/assets/category/drinks.svg";
import FrozenFood from "../../../public/assets/category/frozen-food.svg";
import Groceries from "../../../public/assets/category/groceries.svg";
import InstantFood from "../../../public/assets/category/instant-food.svg";
import Kitchen from "../../../public/assets/category/kitchen.svg";
import NewArrivals from "../../../public/assets/category/new-arrivals.svg";
import Snack from "../../../public/assets/category/snack.svg";
import Personal from "../../../public/assets/category/personal-care.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import axios from "axios";

const Catergory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function fetchCategory() {
      const res = await axios.get("/api/category/pagination?page=1&perPage=10");
      if (res.status == 200) {
        setCategory(res.data.data);
      }
    }
    fetchCategory();
  }, []);
  return (
    <>
      <div className="mt-10 mb-10 flex w-full flex-wrap gap-10">
        {category.map((i: any, index: any) => {
          return (
            <Link
              key={index + 100}
              href={`/product/${i.name}`}
              style={{ textDecoration: "none" }}
            >
              <span style={{ color: "black" }}>{i.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Catergory;
