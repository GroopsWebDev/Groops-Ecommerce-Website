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
//React Bootstrap
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <Container fluid>
        <Row>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="w-full" />
            </Link>
          </Col>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="w-full" />
            </Link>
          </Col>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="w-full" />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <PopularProduct className="w-full" />
          </Col>
          <Col>
            <PopularProduct className="w-full" />
          </Col>
          <Col>
            <PopularProduct className="w-full" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Link href="/components/product">
              <PopularProduct className="w-full" />
            </Link>
          </Col>
          <Col>
            <PopularProduct className="w-full" />
          </Col>
          <Col>
            <PopularProduct className="w-full" />
          </Col>
        </Row>
      </Container>

      {/** Footer */}
      <div className="relative font-sans text-white">
        <Footer className="w-full" />
        <div className="absolute top-72 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl backdrop-blur">
          Footer
        </div>
      </div>
    </>
  );
};

export default GuestHome;
