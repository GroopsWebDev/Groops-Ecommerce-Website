import React from "react"

import HelpCenterText from "../../../public/assets/help/help-center-text.svg";
import QuestionsAboutYourOrder from "../../../public/assets/help/questions-about-your-order.svg";
import DeliveryOrPickup from "../../../public/assets/help/delivery-or-pickup.svg";
import EarningsWithGroups from "../../../public/assets/help/earnings-with-groups.svg";
import AccountAndPurchase from "../../../public/assets/help/account-and-purchase.svg";
import MembershipsAdnGifts from "../../../public/assets/help/memberships-and-gifts.svg";
import RequestProducts from "../../../public/assets/help/request-products.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

const HelpCenter = () => {

  return <>
    <HelpCenterText className="ml-auto mr-auto mt-32 mb-20 w-60" />
    <Container className="flex-auto justify-center ">
      <Row>
        <Col>
          <Image src="/assets/person.png" width={100} height={100} alt="" />
        </Col>
        <div className="league-spartan text-4xl">Questions About Your Order</div>
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