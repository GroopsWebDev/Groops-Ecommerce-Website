import React, { useEffect } from "react";
import { useState } from "react";

//nextAuth
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Spinner } from "react-bootstrap";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: sessionData } = useSession();
  const router = useRouter();
  const [data, setData] = useState<any>([]);
  const imagePath = "https://api.gr-oops.com/";
  const id = router.query.id;
  useEffect(() => {
    if (id) {
      setIsLoading(true);
      async function fetchData() {
        const response = await fetch(
          "http://localhost:3000/api/product/getById?id=" + id
        );
        const json = await response.json();
        if (json.status == 200) {
          setData(json.product);
          setIsLoading(false);
        } else {
          alert("product not found");
        }
      }

      fetchData();
    }
  }, [id]);

  async function AddToCart() {
    const postData = {
      product_id: id,
      quantity: "1",
      userId: sessionData?.user?.id,
    };

    const res = await fetch("/api/product/create/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    if (data.status == 200) {
      router.push("/member/shoppingCart");
    }
  }

  return (
    <>
      <br />
      <br />
      {isLoading ? (
        <Spinner style={{ marginLeft: "700px" }} />
      ) : (
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
              <span className="mr-2 text-2xl font-bold text-gray-700">
                {data.description}
              </span>
              {/* <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label> */}

              {/* <input
              type="number"
              id="quantity"
              name="quantity"
              // defaultValue="1"
              ref={myRef}
              className="h-10 w-16 appearance-none rounded border border-gray-400 py-2 px-3 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none"
            /> */}
            </div>
            <a
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              onClick={AddToCart}
            >
              Add to Cart
            </a>
          </div>
        </div>
      )}
      <br />
      <br />
    </>
  );
};

export default ProductDetails;
