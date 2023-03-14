import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";

//nextAuth

const Success = () => {
  const [paymentStatus, setPaymentStatus] = useState("COMPLETED");
  const { data: sessionData } = useSession();

  const router = useRouter();
  const paymentId = router.query.payment_intent;

  useEffect(() => {
    if (sessionData) {
      createOrder(paymentId);
    }
  }, [sessionData, paymentId]);

  const createOrder = (payment_intent: any) => {
    axios
      .post("/api/order/create", {
        userId: sessionData?.user?.id,
        payment_intent: payment_intent,
      })
      .then((res) => {
        console.log("order created");
      })
      .catch((e) => console.log(e));
  };
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
