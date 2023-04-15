import React, { useEffect } from "react";
import { useState } from "react";

//nextAuth
import { useSession } from "next-auth/react";

// import JoinNowButton from "../../../components/elements/join-now-btn";
// import SignInButton from "../../../components/elements/home-signin-btn";

const ProductDetails = () => {
  // const { data: sessionData } = useSession();
  // const featuredProductsStyle =
  //   "scale-100 ml-10 mr-10 mb-20 transform transition duration-300 hover:scale-110";
  const [data, setData] = useState<any>([]);
  // const imagePath = "https://api.gr-oops.com/";
  // const url = "http://localhost:3000/api/product/cart-details";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:3000/api/product/cart-details"
      );
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  //  console.log(data)

  return (
    <>
      <div>
        <h1>Cart Details</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </tbody>
        </table>
        <p>Total cost: $ </p>
      </div>
    </>
  );
};

export default ProductDetails;
