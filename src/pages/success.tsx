import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
//nextAuth

const Success = () => {
  const [paymentStatus, setPaymentStatus] = useState("COMPLETED");
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {paymentStatus === "COMPLETED" && (
            <div className="mx-auto max-w-7xl py-6 text-center sm:px-6 lg:px-8">
              <h1 className="mb-12 text-2xl font-bold">
                <img
                  src="assets/image/success.png"
                  style={{ marginLeft: "553px" }}
                />
                Your Payment Status : {paymentStatus}
              </h1>
              <Link
                href="/"
                className="w-25 mb-12 rounded bg-green-500  p-2 font-bold text-black"
              >
                Go To Home
              </Link>
            </div>
          )}
          {paymentStatus === "requires_payment_method" && (
            <div className="mx-auto max-w-7xl py-6 text-center sm:px-6 lg:px-8">
              <h1 className="mb-12 text-2xl font-bold">
                <img
                  src="assets/image/failed.png"
                  style={{ marginLeft: "553px" }}
                />
                Your Payment Status : {paymentStatus}
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Success;
