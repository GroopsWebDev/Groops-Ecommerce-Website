import React from "react";
import Link from "next/link";
import Image from "next/image";

//TRPC
import { trpc } from "../utils/trpc";
//nextAuth
import { useSession, getSession } from "next-auth/react";
//import SVG
import WelcomeImage1 from "../../public/assets/welcome/welcome-img-1.svg";
import WelcomeImage2 from "../../public/assets/welcome/welcome-img-2.svg";
import WelcomeImage3 from "../../public/assets/welcome/welcome-img-3.svg";

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

import HelpCenterText from "../../public/assets/help/help-center-text.svg";
import QuestionsAboutYourOrder from "../../public/assets/help/questions-about-your-order.svg";
import DeliveryOrPickup from "../../public/assets/help/delivery-or-pickup.svg";
import EarningsWithGroups from "../../public/assets/help/earnings-with-groups.svg";
import AccountAndPurchase from "../../public/assets/help/account-and-purchase.svg";
import MembershipsAdnGifts from "../../public/assets/help/memberships-and-gifts.svg";
import RequestProducts from "../../public/assets/help/request-products.svg";
//React Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react icons
import JoinNowButton from "../components/elements/join-now-btn";
import SignInButton from "../components/elements/sign-in-btn";
import ShopNowButton from "../components/elements/shop-now-btn";

const Home = () => {
  const { data: sessionData } = useSession();
  const featuredProductsStyle = "scale-100 ml-10 mr-10 mb-20 transform transition duration-300 hover:scale-110";
  const featuredProducts = [
    {
      item:  <PopularProduct className={featuredProductsStyle}/>,
      link: "/product"
    },
    {
      item:  <OnSale className={featuredProductsStyle}/>,
      link: "/"
    },
    {
      item:  <Drinks className={featuredProductsStyle} />,
      link: "/"
    },
    {
      item:  <Snacks className={featuredProductsStyle}/>,
      link: "/"
    },
    {
      item:  <InstantFood className={featuredProductsStyle}/>,
      link: "/"
    },
    {
      item:  <FrozenFood className={featuredProductsStyle}/>,
      link: "/"
    },
    {
      item:  <Kitchen className={featuredProductsStyle}/>,
      link: "/"
    },
    {
      item:  <PersonalCare className={featuredProductsStyle}/>,
      link: "/"
    },
    {
      item:  <Groceries className={featuredProductsStyle}/>,
      link: "/"
    },
  ]
 
  return (
    <>
      {/** BODY */}
      {/** Section 1 */}
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
      {/** Section 2 */}
      <OurFeaturedProducts className="ml-auto mr-auto mt-32 mb-20 w-[466px]" />
      <Container className="flex-auto justify-center ">
        {featuredProducts.map((product,index) => {
          if(index % 3 === 0){
            return (
              <Row key={index} >
                <Col>
                  <Link  href={featuredProducts[index]!.link}>{featuredProducts[index]?.item}</Link>
                </Col>
                <Col>
                <Link  href={featuredProducts[index+1]!.link}>{featuredProducts[index+1]?.item}</Link>
                </Col>
                <Col>
                <Link  href={featuredProducts[index+2]!.link}>{featuredProducts[index+2]?.item}</Link>
                </Col>
              </Row>
            );
          }
      
        })
        }
 
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
      <HelpCenterText className="ml-auto mr-auto mt-32 mb-20 w-60" />
      <Container className="flex-auto justify-center ">
      <Row>
          <Col>
          <Image src="/assets/person.png" width={100} height={100} alt=""/>
          </Col>
          <div className="league-spartan text-4xl">Questions About Your Order</div>
          <div className="font-sans text-4xl">Questions About Your Order</div>
      </Row>
        <Row>
          <Col>
            <QuestionsAboutYourOrder />
          </Col>
          <Col>
            <DeliveryOrPickup />
          </Col>
          <Col>
            <EarningsWithGroups />
          </Col>
        </Row>
        <Row>
          <Col>
            <AccountAndPurchase />
          </Col>
          <Col>
            <MembershipsAdnGifts />
          </Col>
          <Col>
            <RequestProducts />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
