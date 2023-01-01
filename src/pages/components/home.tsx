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
import FooterIcon from "../../../public/assets/group-302.svg";
import OnSale from "../../../public/assets/on-sale.svg";
import BecomeMember from "../../../public/assets/become-member-img.svg";
//React Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react icons
import { AiFillInstagram, AiFillWechat, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Button } from "react-bootstrap";

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
          <WelcomeImage1 className="w-full" />
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative font-sans text-white">
            <WelcomeImage2 className="w-full" />
            <div className="absolute top-72 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl backdrop-blur">
              Groops is a Revolution
            </div>
            <div className="absolute top-[400px] left-1/2  -translate-x-80 -translate-y-1/2 text-xl backdrop-blur">
              We optimize the allocation of social resources by reproduction of
              simply daily shopping.
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="relative font-sans text-white">
            <WelcomeImage3 className="w-full" />
            <div className="absolute top-72 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl backdrop-blur">
              Groops is a Revolution
            </div>
            <div className="absolute top-[400px] left-1/2  -translate-x-80 -translate-y-1/2 text-xl backdrop-blur">
              We optimize the allocation of social resources by reproduction of
              simply daily shopping.
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      {/** Section 2 */}
      <OurFeaturedProducts className="ml-auto mr-auto mt-20 mb-20 w-1/3" />
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
      <div className="relative">
        <BecomeMember className="w-full" />
        <button className="absolute top-[400px] ml-24 text-3xl bg-[white] rounded-full pl-12 pr-12 pt-2 pb-2 inline">Join Now</button>
        <button className="absolute top-[400px] ml-96 inline rounded-full border-2 border-white bg-[none] pl-11 pr-11 pt-2 pb-2 text-3xl text-white hover:bg-black hover:border-0 ">
          Sign In
        </button>

        <div className="absolute top-[600px] ml-24 ">
          <a
            href="#_"
            className="group relative inline-flex items-center overflow-hidden rounded-full border-2 pt-2 pb-2 pl-10 pr-10 text-lg font-medium text-black bg-white hover:bg-gray-50 hover:text-white"
          >
            <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-indigo-600 opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
            <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-300 group-hover:translate-x-0">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Join Now</span>
          </a>
        </div>

        <div className="absolute top-[600px] ml-96">
          <a
            href="#_"
            className="font-xl group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white px-6 py-3 pt-2 pb-2 pl-10 pr-10 shadow-md transition duration-300 ease-out"
          >
            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-purple-500 text-white duration-300 group-hover:translate-x-0">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center text-white transition-all duration-300 group-hover:translate-x-full">
              Sign In
            </span>
            <span className="invisible relative">Sign In</span>
          </a>
        </div>
      </div>

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
