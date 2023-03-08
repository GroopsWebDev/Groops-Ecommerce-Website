import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

//nextAuth
import { useSession, getSession } from "next-auth/react";
//import SVG

import Drinks from "../../public/assets/product/drinks.svg";
import OurFeaturedProducts from "../../public/assets/product/our-featured-products.svg";

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
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategoryList } from "../app/itemManagement";

const Home = () => {
  const { data: sessionData } = useSession();
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const featuredProductsStyle =
    "scale-100 ml-10 mr-10 mb-20 transform transition duration-300 hover:scale-110";

  useEffect(() => {
    async function fetchCategory() {
      const res = await axios.get("/api/category/pagination?page=1&perPage=10");
      if (res.status == 200) {
        setCategory(res.data.data);
        dispatch(setCategoryList(res.data.data));
      }
    }
    fetchCategory();
  }, []);

  return (
    <>
      {/** BODY */}
      {/** Section 1 */}
      <Welcome />

      {/** Section 2 */}
      <OurFeaturedProducts className="ml-auto mr-auto mt-32 mb-20 w-[466px]" />
      <Container>
        <Row>
          {category.map((category: any, index) => {
            let url = "https://api.gr-oops.com/" + category.url;
            return (
              <Col sm={6} md={4} key={index}>
                <Link href={`/product/${category.name}`}>
                  <img
                    src={url}
                    alt={category.name}
                    className={featuredProductsStyle}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/** Section 3 Card Carousel*/}
      <TopGroupsTile className="ml-auto mr-auto mt-10 mb-20 w-60" />
      <TopGroups className="ml-auto mr-auto w-9/12" />

      {/** Section 4 Become a Groops | Hide this if signed in !!!*/}
      {!sessionData && (
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
