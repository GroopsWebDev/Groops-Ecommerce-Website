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

  const row_style = "flex flex-row justify-center gap-10 mt-10"
  const item_style = "transform transition duration-300 hover:scale-110"

  return <>
    <div className="mb-20">
      <HelpCenterText className="ml-auto mr-auto mt-32 mb-10 w-60" />
      <div className={row_style}>
        <Link href="/"><QuestionsAboutYourOrder className={item_style} /> </Link>
        <Link href="/"><DeliveryOrPickup className={item_style} /></Link>
        <Link href="/"><EarningsWithGroups className={item_style} /></Link>
      </div>
      <div className={row_style}>
        <Link href="/"><AccountAndPurchase className={item_style} /></Link>
        <Link href="/"><MembershipsAdnGifts className={item_style} /></Link>
        <Link href="/"><RequestProducts className={item_style} /></Link>
      </div>
    </div>
  </>
}

export default HelpCenter