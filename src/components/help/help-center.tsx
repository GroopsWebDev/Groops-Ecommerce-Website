import React from "react"

import HelpCenterText from "../../../public/assets/help/help-center-text.svg";
import QuestionsAboutYourOrder from "../../../public/assets/help/question.svg";
import DeliveryOrPickup from "../../../public/assets/help/delivery.svg";
import EarningsWithGroups from "../../../public/assets/help/earning.svg";
import AccountAndPurchase from "../../../public/assets/help/account.svg";
import MembershipsAdnGifts from "../../../public/assets/help/membership.svg";
import RequestProducts from "../../../public/assets/help/request.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "next/image";

const HelpCenter = () => {

  return <>
    <div className="mb-20">
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
    </div>
  </>
}

export default HelpCenter