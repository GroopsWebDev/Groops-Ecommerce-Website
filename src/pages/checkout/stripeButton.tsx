import React, { useEffect } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { CircularProgress } from "@mui/material";
import { StripePaymentElementOptions } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export default function StripeButton({
  groupId,
  salesTax,
  delivery,
  tipDelivery,
  greenFee,
  total,
}: any) {
  // encomment for stripe
  const stripe = useStripe();
  const elements = useElements();
  const { data: sessionData } = useSession();
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  // uncoment for stripe
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    stripe
      .confirmPayment({
        elements,
        // confirmParams: {
        //   // Make sure to change this to your payment completion page
        //   return_url: "http://localhost:3000/success",
        // },
        redirect: "if_required",
      })
      .then<any>(async ({ error, paymentIntent }) => {
        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`. For some payment methods like iDEAL, your customer will
        // be redirected to an intermediate site first to authorize the payment, then
        // redirected to the `return_url`.

        if (error) {
          if (
            error?.type === "card_error" ||
            error?.type === "validation_error"
          ) {
            setMessage(error?.message || "");
          }
          setIsLoading(false);
        } else if (paymentIntent) {
          await createOrder(paymentIntent.id);
        } else {
          setMessage("An unexpected error occurred.");
          setIsLoading(false);
        }
      });
  };

  const paymentElementOptions: StripePaymentElementOptions = {
    layout: "tabs",
  };

  const createOrder = async (payment_intent: any) => {
    axios
      .post("/api/order/create", {
        userId: sessionData?.user?.id,
        payment_intent: payment_intent,
        groupId: groupId,
        salesTax: salesTax,
        delivery: delivery,
        greenFee: greenFee,
        tipDelivery: tipDelivery,
        total: total,
      })
      .then((res) => {
        localStorage.removeItem("groupId");
        router.push("/success");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setMessage("An unexpected error occurred.");
      });
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e: any) => setEmail(e?.target?.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="btn btn-primary w-100 mt-3"
      >
        <span id="button-text">
          {isLoading ? <CircularProgress /> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div
          id="payment-message"
          className="my-2 flex items-center justify-center rounded bg-red-300 py-2 text-black"
        >
          {message}
        </div>
      )}
    </form>
  );
}
