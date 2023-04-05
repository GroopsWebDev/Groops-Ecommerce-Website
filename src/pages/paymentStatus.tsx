import React, { useEffect } from "react";
import { useState } from "react";

//nextAuth

const ProductDetails = () => {
  const [paymentStatus, setPaymentStatus] = useState("");
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const product = urlParams.get("redirect_status");
    setPaymentStatus("succeeded");
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          {paymentStatus === "succeeded" && (
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

export default ProductDetails;
