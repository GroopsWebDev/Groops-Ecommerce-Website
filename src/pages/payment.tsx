import React from 'react'
import Link from "next/link";

export const Payment = () => {
  return (
    <div>
        <div className="content-center">Payment</div>
        <div className="  mt-5">
        <Link href="/" className="rounded-full bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20 hover:text-black border-2 border-black">Home</Link>
        </div>
    </div>
  )
}

export default Payment
