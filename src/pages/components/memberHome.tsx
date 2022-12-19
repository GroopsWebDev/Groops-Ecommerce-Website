import React, { useState, useRef } from "react";
import Link from "next/link";
//components
import Header from "./header";
//import SVG
import WelcomeImage1 from "../../../public/assets/welcome-img-1.svg";
import WelcomeImage2 from "../../../public/assets/welcome-img-2.svg";
import WelcomeImage3 from "../../../public/assets/welcome-img-3.svg";
import PopularProduct from "../../../public/assets/popular-product.svg";
import OurFeaturedProducts from "../../../public/assets/our-featured-products.svg";
import Footer from "../../../public/assets/footer.svg";

//React Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { useSession } from "next-auth/react";



const memberHome = () => {
  return (
    <>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
        Home 2 Page
      </div>
    </>
  );
};

export default memberHome;
