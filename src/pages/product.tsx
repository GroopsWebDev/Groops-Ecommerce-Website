import React from "react";

import Carousel from "react-bootstrap/Carousel";

import ShopNowButton from "../components/elements/shop-now-btn";

import WelcomeImage1 from "../../public/assets/welcome/welcome-img-1.svg";
import WelcomeImage2 from "../../public/assets/welcome/welcome-img-2.svg";
import WelcomeImage3 from "../../public/assets/welcome/welcome-img-3.svg";

import OnSale from "../../public/assets/category/on-sale.svg"
import PopularProduct from "../../public/assets/category/popular-product.svg"

// import  from "../../public/assets/";

const Product = () => {
  return (
    <>
      <div className="m-auto text-6xl">
        product page (member & guest)

      </div>

      <div className="flex flex-wrap">
        <OnSale />
        <PopularProduct />
      </div>


      <Carousel>
        <Carousel.Item>
          <div className="relative font-sans text-white">
            <WelcomeImage1 className="w-full" />
            <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
              <ShopNowButton />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative font-sans text-white">
            <WelcomeImage2 className="w-full" />
            <div className="absolute top-3/4 left-1/4 -translate-x-1/2 -translate-y-1/2 transform">
              <ShopNowButton />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative h-fit font-sans text-white">
            <WelcomeImage3 className="w-full" />
            <div className="absolute top-3/4 left-1/4 -translate-x-1/2 -translate-y-1/2 transform">
              <ShopNowButton />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Product;
