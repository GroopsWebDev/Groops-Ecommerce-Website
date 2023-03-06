// import React, { useEffect } from "react";
// import { useState } from 'react';
// import Link from "next/link";

// //nextAuth
// import { useSession } from "next-auth/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
//TRPC
import { api } from "../utils/api";
//nextAuth
import { useSession, getSession } from "next-auth/react";
//import SVG
import PopularProduct from "../../public/assets/product/popular-product.svg";
import Drinks from "../../public/assets/product/drinks.svg";
import OurFeaturedProducts from "../../public/assets/product/our-featured-products.svg";

import OnSale from "../../public/assets/product/on-sale.svg";
import Snacks from "../../public/assets/product/snacks.svg";
import InstantFood from "../../public/assets/product/instant-food.svg";
import FrozenFood from "../../public/assets/product/frozen-food.svg";
import Kitchen from "../../public/assets/product/kitchen.svg";
import PersonalCare from "../../public/assets/product/personal-care.svg";
import Groceries from "../../public/assets/product/groceries.svg";

import BecomeMember from "../../public/assets/membership/become-member-img.svg";
import GroopsMembership from "../../public/assets/membership/groops-membership-text.svg";

import TopGroupsTile from "../../public/assets/group/top-groups-text.svg";
import TopGroups from "../../public/assets/group/top-groups.svg";

//React Bootstrap
import Container from "react-bootstrap/Container";
//react icons
// import JoinNowButton from "../components/elements/join-now-btn";
// import SignInButton from "../components/elements/sign-in-btn";

// import Welcome from "../components/welcome";
// import HelpCenter from "../components/help/help-center";
// import { Spinner } from "react-bootstrap";



// const Home = () => {
//   const { data: sessionData } = useSession();
//   const [isLoading, setIsLoading] = useState(false);


//   const [data, setData] = useState<any>([]);
//   const imagePath = "https://api.gr-oops.com/";
//   const url = "http://localhost:3000/product/view/";

//   useEffect(() => {
//     async function fetchData() {
//       setIsLoading(true)

//       const response = await fetch('http://localhost:3000/api/get-data');
//       const json = await response.json();
//       setData(json);
//       setIsLoading(false)

//     }

//     fetchData();
//   }, []);


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react icons
import JoinNowButton from "../components/elements/join-now-btn";
import SignInButton from "../components/elements/sign-in-btn";
import ShopNowButton from "../components/elements/shop-now-btn";

import Welcome from "../components/welcome";
import HelpCenter from "../components/help/help-center";

const Home = () => {
  const { data: sessionData } = useSession();
  const featuredProductsStyle =
    "scale-100 ml-10 mr-10 mb-20 transform transition duration-300 hover:scale-110";
  const featuredProducts = [
    {
      item: <PopularProduct className={featuredProductsStyle} />,
      link: "/product",
    },
    {
      item: <OnSale className={featuredProductsStyle} />,
      link: "/",
    },
    {
      item: <Drinks className={featuredProductsStyle} />,
      link: "/",
    },
    {
      item: <Snacks className={featuredProductsStyle} />,
      link: "/",
    },
    {
      item: <InstantFood className={featuredProductsStyle} />,
      link: "/",
    },
    {
      item: <FrozenFood className={featuredProductsStyle} />,
      link: "/",
    },
    {
      item: <Kitchen className={featuredProductsStyle} />,
      link: "/",
    },
    {
      item: <PersonalCare className={featuredProductsStyle} />,
      link: "/",
    },
    {
      item: <Groceries className={featuredProductsStyle} />,
      link: "/",
    },
  ];

  return (
    <>
      {/** BODY */}
      {/** Section 1 */}
      <Welcome />

      {/** Section 2 */}
      <OurFeaturedProducts className="ml-auto mr-auto mt-32 mb-20 w-[466px]" />
      <Container className="flex-auto justify-center ">

        {/* <br />
        <br />
        {isLoading ? (
          <Spinner style={{ marginLeft: "700px" }} />

        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item: any, index: any) => {


              return (


                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
                >
                  <img src={imagePath + item.image} alt={item.englishProductName} className="w-full" />
                  <div className="mt-4">
                    <h2 className="text-lg font-medium">{item.englishProductName}</h2>
                    <p className="text-gray-500">{item.description}</p>
                    <p className="mt-2 font-bold text-gray-800">{item.price}</p>
                    <a href={url + item.skuid} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Buy Now
                    </a>
                  </div>
                </div>
              )
            }
            )}
          </div>

        )} */}
        {featuredProducts.map((product, index) => {
          if (index % 3 === 0) {
            return (
              <Row key={index}>
                <Col>
                  <Link href={featuredProducts[index]!.link}>
                    {featuredProducts[index]?.item}
                  </Link>
                </Col>
                <Col>
                  <Link href={featuredProducts[index + 1]!.link}>
                    {featuredProducts[index + 1]?.item}
                  </Link>
                </Col>
                <Col>
                  <Link href={featuredProducts[index + 2]!.link}>
                    {featuredProducts[index + 2]?.item}
                  </Link>
                </Col>
              </Row>
            );
          }
        })}
      </Container>

      {/** Section 3 Card Carousel*/}
      <TopGroupsTile className="ml-auto mr-auto mt-10 mb-20 w-60" />
      <TopGroups className="ml-auto mr-auto w-9/12" />

      {/** Section 4 Become a Groops | Hide this if signed in !!!*/}
      {
        sessionData ? null : (
          <div>
            <GroopsMembership className="ml-auto mr-auto mt-32 mb-20 w-[430px]" />
            <div className="relative">
              <BecomeMember className="w-full" />
              <div className="absolute top-[380px]  left-[115px] ">
                <JoinNowButton />
              </div>
              <div className="absolute top-[380px] left-[400px]">
                <SignInButton />
              </div>
            </div>
          </div>
        )
      }

      {/** Section 5 Help Center */}
      <HelpCenter />
    </>
  );
};

export default Home;
