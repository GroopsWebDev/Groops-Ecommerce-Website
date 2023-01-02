import React from "react";
import Link from "next/link";
import { GetServerSideProps } from "next";
//nextAuth
import { useSession, getSession } from "next-auth/react";
//components
import Header from "./header";
//import SVG
import WelcomeImage1 from "../../../public/assets/welcome-img-1.svg";
import WelcomeImage2 from "../../../public/assets/welcome-img-2.svg";
import WelcomeImage3 from "../../../public/assets/welcome-img-3.svg";
import PopularProduct from "../../../public/assets/popular-product.svg";
import OurFeaturedProducts from "../../../public/assets/our-featured-products.svg";
import Footer from "../../../public/assets/footer.svg";
import OnSale from "../../../public/assets/on-sale.svg";
import BecomeMember from "../../../public/assets/become-member-img.svg";
import TopGroupsTile from "../../../public/assets/top-groups-text.svg";
import TopGroups from "../../../public/assets/top-groups.svg";
import GroopsMembership from "../../../public/assets/groops-membership-text.svg";
import HelpCenterText from "../../../public/assets/help-center-text.svg";
import QuestionsAboutYourOrder from "../../../public/assets/questions-about-your-order.svg";
import DeliveryOrPickup from "../../../public/assets/delivery-or-pickup.svg";
import EarningsWithGroups from "../../../public/assets/earnings-with-groups.svg";
import AccountAndPurchase from "../../../public/assets/account-and-purchase.svg";
import RequestProducts from "../../../public/assets/request-products.svg";
//React Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react icons
import { AiFillInstagram, AiFillWechat, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import JoinNowButton from "./utilities/join-now-btn";
import SignInButton from "./utilities/sign-in-btn";
import ShopNowButton from "./utilities/shop-now-btn";

//When I click logout, it will redirect to the guestHome page
// export const getServerSideProps: GetServerSideProps = async (req) => {
//   const session = await getSession(req);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/components/guest/home",
//         permanent: false,
//       },
//     };
//   }

//   return { props: { session } };
// };

const GuestHome = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Header />
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
        <Row>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="ml-11 w-full" />
            </Link>
          </Col>
          <Col>
            <OnSale className="ml-11 w-full" />
          </Col>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="ml-11 w-full" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <PopularProduct className="ml-12 w-full" />
          </Col>
          <Col>
            <PopularProduct className="ml-11 w-full" />
          </Col>
          <Col>
            <PopularProduct className="ml-11 w-full" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="ml-10 w-full" />
            </Link>
          </Col>
          <Col>
            <PopularProduct className="ml-10 w-full" />
          </Col>
          <Col>
            <PopularProduct className="ml-10 w-full" />
          </Col>
        </Row>
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
            <div className="absolute top-[380px] ml-[7rem]">
              <JoinNowButton />
            </div>
            <div className="absolute top-[380px] ml-96">
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
            <QuestionsAboutYourOrder />
          </Col>
          <Col>
            <DeliveryOrPickup />
          </Col>
          <Col>
            <EarningsWithGroups />
          </Col>
        </Row>
      </Container>

      {/** Footer */}
      <div className="relative text-white">
        <Footer className="w-full" />
        <Container className="absolute top-16 left-10 text-white">
          <Row>
            <Col lg="auto">
              <h3>About Us</h3>
              <p className="mt-10 text-2xl font-extralight">privacy</p>
              <p className="mt-10 text-2xl font-extralight">Contact us</p>
            </Col>
            <Col lg="auto" className="ml-20">
              <h3>Groops! Family</h3>
              <p className="mt-10 text-2xl font-extralight">Become a driver</p>
              <p className="mt-10 text-2xl font-extralight">Contact us</p>
            </Col>
            <Col lg="auto" className="ml-20">
              <h3>Follow Us On</h3>
              <div className="mt-4"></div>
              <AiFillInstagram className="inline text-4xl" />
              <FaTiktok className="ml-3 inline text-3xl" />
              <AiFillYoutube className="ml-3 inline text-4xl" />
              <AiFillWechat className="ml-3 inline text-4xl" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GuestHome;
