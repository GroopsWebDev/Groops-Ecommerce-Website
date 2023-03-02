import React, { useEffect } from "react";
import { useState } from "react";

//nextAuth
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const myRef: any = useRef(null);
  const router = useRouter();

  const { data: sessionData } = useSession();
  const featuredProductsStyle =
    "scale-100 ml-10 mr-10 mb-20 transform transition duration-300 hover:scale-110";
  const [data, setData] = useState<any>([]);
  const imagePath = "https://api.gr-oops.com/";
  const url = "http://localhost:3000/api/product/checkout";

  useEffect(() => {
    const url = window.location.pathname;
    const itemId = url.split("/").pop();
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/api/product/getById?id=" + itemId
      );
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  const id = data.skuid;

  const AddToCart = async () => {
    const postData = {
      product_id: id,
      quantity: myRef.current.value ? myRef.current.value : 1,
    };

    const res = await fetch("http://localhost:3000/api/product/cart-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    if (data == 200) {
      router.push("/product/cart-details");
    }
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-6/12">
          <img
            alt="product image"
            src={imagePath + data.image}
            className="mb-4 w-full rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full px-4 lg:w-6/12">
          <h1 className="mb-2 text-3xl font-semibold">
            {data.englishProductName}
          </h1>
          <p className="mb-2 text-base text-gray-700">{data.description}</p>
          <div className="mb-4 flex items-center">
            <span className="mr-2 text-2xl font-bold text-gray-700">
              {data.price}
            </span>
          </div>
          <div className="mb-4 flex items-center">
            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>

            <input
              type="number"
              id="quantity"
              name="quantity"
              defaultValue="1"
              ref={myRef}
              className="h-10 w-16 appearance-none rounded border border-gray-400 py-2 px-3 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <a
            className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
            onClick={AddToCart}
            href={url}
          >
            Add to Cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
