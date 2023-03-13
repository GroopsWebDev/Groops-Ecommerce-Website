import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
type props = { type: any; filter: string };

const ProductList = ({ type, filter }: props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.post(`/api/product/pagination`, {
        categoryName: type,
        sortBy: filter,
      });
      if (res.status == 200) {
        setProduct(res.data.data);
      }
    };
    fetchProduct();
  }, [filter]);
  return (
    <>
      <div className="mt-10">
        <div className="mb-10 mt-10 flex flex-row flex-wrap justify-center space-x-10">
          {product.map((i: any, index) => {
            return (
              <div key={index}>
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
      </div>
    </>
  );
};

export default ProductList;
