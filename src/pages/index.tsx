import React, { useEffect, useState } from "react";
import Link from "next/link";

//nextAuth
import { useSession, getSession } from "next-auth/react";
//import SVG

import OurFeaturedProducts from "../../public/assets/category/our-featured-products.svg";
import BecomeMember from "../../public/assets/membership/become-member-img.svg";
import GroopsMembership from "../../public/assets/membership/groops-membership-text.svg";

import TopGroupsTile from "../../public/assets/group/top-groups-text.svg";
import TopGroups from "../../public/assets/group/top-groups.svg";

//React Bootstrap
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react icons
import JoinNowButton from "../components/tailwind-buttons/join-now-btn";
import HomeSignInButton from "../components/tailwind-buttons/home-signin-btn";
import Welcome from "../components/welcome";
import HelpCenter from "../components/help/help-center";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategoryList } from "../app/itemManagement";
import Loader from "../components/loader/loader";

// import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { getRemainingTime } from "../utils/utils";

const Home = () => {
  const { data: sessionData } = useSession();
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const featuredProductsStyle =
    "scale-100 ml-10 mr-10 mb-20 transform transition duration-300 hover:scale-110";

  useEffect(() => {
    async function fetchCategory() {
      setLoading(true);
      const res = await axios.get("/api/category/pagination?page=1&perPage=10");
      if (res.status == 200) {
        setCategory(res.data.data);
        dispatch(setCategoryList(res.data.data));
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    fetchCategory();
  }, []);

  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const groups = await axios.get("/api/top/group");
      if (groups.data.status == 200) {
        setGroups(groups.data.group);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {/** BODY */}
      {/** Section 1 */}
      <Welcome />

      

      {/** Section 2 */}
      <OurFeaturedProducts className="ml-auto mr-auto mt-32 mb-20 w-[466px]" />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            {category.map((category: any, index) => {
              const url = "https://api.gr-oops.com/" + category.url;
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
        )}
      </Container>

      {/** Section 3 Card Carousel*/}
      {groups.length > 0 && (
        <TopGroupsTile className="ml-auto mr-auto mt-10 mb-20 w-60" />
      )}
      {/* <TopGroups className="ml-auto mr-auto w-9/12" /> */}

      <div className="container" style={{ maxWidth: "800px" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Carousel>
                {groups.map((group: any, index) => (
                  <Carousel.Item key={index}>
                    <img
                      style={{ maxWidth: "800px", maxHeight: "450px" }}
                      className="d-block w-100"
                      src={`https://api.gr-oops.com/` + group?.groupImg}
                      alt={group.groupName}
                    />
                    <Carousel.Caption>
                      <h3>{group.groupName}</h3>
                      <p>{getRemainingTime(group?.endDate)}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/** Section 4 Become a Groops | Hide this if signed in !!!*/}
      {!sessionData && (
        <div>
          <GroopsMembership className="ml-auto mr-auto mt-32 mb-20 w-[430px]" />
          <div className="relative">
            <BecomeMember className="w-full" />
            <div className="absolute top-[380px]  left-[115px] ">
              <Link href="/register">
                <JoinNowButton />
              </Link>
            </div>

            <div className="absolute top-[380px] left-[400px]">
              <Link href="/login">
                <HomeSignInButton />
              </Link>
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
