import React, { useEffect } from "react";
import { useState } from 'react';

//nextAuth
import { useSession } from "next-auth/react";
import   { useRef } from 'react';
import { useRouter } from 'next/router';



 


 



const ProductDetails = () => {
  const myRef:any = useRef(null);

  const { data: sessionData } = useSession();
  const featuredProductsStyle =
    "scale-100 ml-10 mr-10 mb-20 transform transition duration-300 hover:scale-110";
  const [data, setData] = useState<any>([]);
  const imagePath = "https://api.gr-oops.com/";
  const url = 'http://localhost:3000/api/product/checkout';

  useEffect(() => {
    async function fetchData() {

      const response = await fetch('http://localhost:3000/api/product/getById?id=2');
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  const id = data.skuid;
  
  
  const AddToCart = async () =>{
    const postData = {
      product_id: id,
      quantity: myRef.current.value ? myRef.current.value : 1
    };
  
  const res = await fetch('http://localhost:3000/api/product/cart-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    const data = await res.json();
    // if (data == 200){
    //   const router = useRouter()
    //   router.push('product/cart-details')
    // }     
   
  }





  return (
    <>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4">
          <img
            alt="product image"
            src={imagePath + data.image}
            className="w-full shadow-lg rounded-lg mb-4"
          />
        </div>
        <div className="w-full lg:w-6/12 px-4">
          <h1 className="text-3xl font-semibold mb-2">{data.englishProductName}</h1>
          <p className="text-gray-700 text-base mb-2">
            {data.description}
          </p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-700 mr-2">{data.price}</span>
          </div>
          <div className="flex items-center mb-4">

            <label htmlFor="quantity" className="mr-2">
              Quantity:
            </label>

            <input
              type="number"
              id="quantity"
              name="quantity"
              defaultValue="1"
              ref={myRef}
              className="appearance-none w-16 h-10 border border-gray-400 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            />
          </div>
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={AddToCart}  href={url}>
            Add to Cart
          </a>
        </div>
      </div>


    </>
  );
};

export default ProductDetails;
