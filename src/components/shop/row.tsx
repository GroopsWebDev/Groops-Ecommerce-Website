import axios from "axios";
import React, { useEffect, useState } from "react";

import Detail from "../product/detail";

type props = { type: any };

const Row = ({ type }: props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.post(`/api/product/pagination`, {
        categoryName: type,
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
        <div className="mb-10 mt-10 flex flex-row flex-wrap justify-center space-x-10">
          {product.map((i: any, index) => {
            return (
              <div key={index}>
                <Detail
                  name={i.englishProductName}
                  price={i.price}
                  id={i.skuid}
                  image={i.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
