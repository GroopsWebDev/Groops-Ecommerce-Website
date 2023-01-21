import React from "react"

import Link from "next/link";

import HelpCenterText from "../../../public/assets/help/help-center-text.svg";
import QuestionsAboutYourOrder from "../../../public/assets/help/question.svg";
import DeliveryOrPickup from "../../../public/assets/help/delivery.svg";
import EarningsWithGroups from "../../../public/assets/help/earning.svg";
import AccountAndPurchase from "../../../public/assets/help/account.svg";
import MembershipsAdnGifts from "../../../public/assets/help/membership.svg";
import RequestProducts from "../../../public/assets/help/request.svg";


const HelpCenter = () => {

  return <>
    <div className="mb-20">
      <HelpCenterText className="ml-auto mr-auto mt-32 mb-20 w-60" />
      <div className="flex flex-row justify-center">
        <Link href="/"><QuestionsAboutYourOrder className="hover:scale-110" /> </Link>
        <Link href="/"><DeliveryOrPickup className="hover:scale-110" /></Link>
        <Link href="/"><EarningsWithGroups className="hover:scale-110" /></Link>
      </div>
      <div className="flex flex-row justify-center">
        <Link href="/"><AccountAndPurchase className="hover:scale-110" /></Link>
        <Link href="/"><MembershipsAdnGifts className="hover:scale-110" /></Link>
        <Link href="/"><RequestProducts className="hover:scale-110" /></Link>
      </div>
    </div>
  </>
}

export default HelpCenter