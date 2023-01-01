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
//React Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react icons
import {AiFillInstagram,AiFillWechat,AiFillYoutube} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";


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
              <PopularProduct className="w-full ml-12" />
            </Link>
          </Col>
          <Col>

              <OnSale className="w-full ml-11" />

          </Col>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="w-full ml-11" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <PopularProduct className="w-full ml-12" />
          </Col>
          <Col>
            <PopularProduct className="w-full ml-11" />
          </Col>
          <Col>
            <PopularProduct className="w-full ml-11" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="w-full ml-10" />
            </Link>
          </Col>
          <Col>
            <PopularProduct className="w-full ml-10" />
          </Col>
          <Col>
            <PopularProduct className="w-full ml-10" />
          </Col>
        </Row>
      </Container>

      {/** Footer */}
      <div className="relative text-white">
        <Footer className="w-full" />
        <Container className="absolute top-16 left-10 text-white">
          <Row>
            <Col lg="auto" >
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
            <AiFillInstagram className="inline text-4xl"/>
<FaTiktok className="inline ml-3 text-3xl"/>
<AiFillYoutube className="inline ml-3 text-4xl" />
<AiFillWechat className="inline ml-3 text-4xl" />


            </Col>
          </Row>
        </Container>


      </div>

    </>
  );
};

export default GuestHome;
