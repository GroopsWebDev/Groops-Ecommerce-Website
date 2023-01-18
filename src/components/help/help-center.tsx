import React from "react"

import HelpCenterText from "../../../public/assets/help/help-center-text.svg";
import QuestionsAboutYourOrder from "../../../public/assets/help/Question.svg";
import DeliveryOrPickup from "../../../public/assets/help/Delivery.svg";
import EarningsWithGroups from "../../../public/assets/help/Earning.svg";
import AccountAndPurchase from "../../../public/assets/help/Account.svg";
import MembershipsAdnGifts from "../../../public/assets/help/Membership.svg";
import RequestProducts from "../../../public/assets/help/Request.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

const HelpCenter = () => {

  return <>
    <HelpCenterText className="ml-auto mr-auto mt-32 mb-20 w-60" />
    <Container className="flex-auto justify-center ">
      <Row>
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
}

export default HelpCenter