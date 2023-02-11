import React from "react";
import { useRouter } from 'next/router';

import Advertisement from "../../../../public/assets/shop/advertisement/advertisement.svg"

export default function Item() {

  const router = useRouter();
  const { id } = router.query;

  

  return <>
    {id}

    <Advertisement className="w-full" />
  </>
}