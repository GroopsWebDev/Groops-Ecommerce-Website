import React from 'react'
//import SVG
import FooterSVG from "../../public/assets/footer/footer.svg";
//React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//react icons
import { AiFillInstagram, AiFillWechat, AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
    <div className="relative text-white">
    <FooterSVG className="w-full" />
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
  )
}

export default Footer