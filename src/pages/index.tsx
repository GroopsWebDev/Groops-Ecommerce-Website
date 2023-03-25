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
      link: "/product/Popular Products",
    },
    {
      item: <OnSale className={featuredProductsStyle} />,
      link: "/product/On Sale",
    },
    {
      item: <Drinks className={featuredProductsStyle} />,
      link: "/product/Drinks",
    },
    {
      item: <Snacks className={featuredProductsStyle} />,
      link: "/product/Snacks",
    },
    {
      item: <InstantFood className={featuredProductsStyle} />,
      link: "/product/Instant Food",
    },
    {
      item: <FrozenFood className={featuredProductsStyle} />,
      link: "/product/Frozen Food",
    },
    {
      item: <Kitchen className={featuredProductsStyle} />,
      link: "/product/Kitchen",
    },
    {
      item: <PersonalCare className={featuredProductsStyle} />,
      link: "/product/Personal Care",
    },
    {
      item: <Groceries className={featuredProductsStyle} />,
      link: "/product/Groceries",
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
      {sessionData ? null : (
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
      )}

      {/** Section 5 Help Center */}
      <HelpCenter />
    </>
  );
};

export default Home;
