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
  const [product, setProduct] = useState<any>([]);
  const [disable, setDisable] = useState(false);
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
          setProduct(json.product);
          setIsLoading(false);
        } else {
          alert("product not found");
        }
      }

      fetchData();
    }
  }, [id]);

  async function AddToCart() {
    if (!sessionData) {
      alert("Login Required");
      return;
    }
    setDisable(true);
    const postData = {
      product_id: id,
      quantity: "1",
      userId: sessionData?.user?.id,
    };

    const res = await fetch("/api/cart/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    setDisable(false);
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
              src={imagePath + product?.image}
              className="mb-4 w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <h1 className="mb-2 text-3xl font-semibold">
              {product?.englishProductName}
            </h1>
            <p className="mb-2 text-base text-gray-700">
              {product.description}
            </p>
            <p className="mb-2 text-base text-gray-700">
              {product?.category?.name}
            </p>
            <div className="mb-4 flex items-center">
              <span className="mr-2 text-2xl font-bold text-gray-700">
                $ {product?.price}
              </span>
            </div>
            <button
              disabled={disable}
              onClick={AddToCart}
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
      <br />
      <br />
    </>
  );
};

export default ProductDetails;
