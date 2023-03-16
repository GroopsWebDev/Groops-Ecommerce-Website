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
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import Swal from "sweetalert2";

export default function CheckoutForm({
  groupId,
  modalClose,
  salesTax,
  delivery,
  tipDelivery,
  greenFee,
  total,
}: any) {
  // const stripe = useStripe();
  // const elements = useElements();
  const { data: sessionData } = useSession();
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   if (!stripe || !elements) {
  //     // Stripe.js has not yet loaded.
  //     // Make sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   setIsLoading(true);

  //   stripe
  //     .confirmPayment({
  //       elements,
  //       // confirmParams: {
  //       //   // Make sure to change this to your payment completion page
  //       //   return_url: "http://localhost:3000/success",
  //       // },
  //       redirect: "if_required",
  //     })
  //     .then<any>(async ({ error, paymentIntent }) => {
  //       // This point will only be reached if there is an immediate error when
  //       // confirming the payment. Otherwise, your customer will be redirected to
  //       // your `return_url`. For some payment methods like iDEAL, your customer will
  //       // be redirected to an intermediate site first to authorize the payment, then
  //       // redirected to the `return_url`.

  //       if (error) {
  //         if (
  //           error?.type === "card_error" ||
  //           error?.type === "validation_error"
  //         ) {
  //           setMessage(error?.message || "");
  //         }
  //         setIsLoading(false);
  //       } else if (paymentIntent) {
  //         await createOrder(paymentIntent.id);
  //       } else {
  //         setMessage("An unexpected error occurred.");
  //         setIsLoading(false);
  //       }
  //     });
  // };

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

  // This values are the props in the UI
  const amount = "2";
  const currency = "USD";
  const style = { layout: "vertical" };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }: any) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        {/* <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                  Swal.fire({
                    title: "Payment Status",
                    text: "Paymenyt Pay Successfully",
                    icon: "success",
                    confirmButtonText: "OK",
                  });
                    return actions.order.capture().then(function () {
                      Swal.fire({
                        title: "Payment Status",
                        text: "Paymenyt Pay Successfully JK",
                        icon: "success",
                        confirmButtonText: "OK",
                      });
                    });
                }}
            /> */}
      </>
    );
  };

  // creates a paypal order
  const createOrderJK = (data: any, actions: any) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Demo",
            amount: {
              currency_code: "USD",
              value: total,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID: any) => {
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      const { payer } = details;
      if (details.status == "COMPLETED") {
        modalClose("true");
        Swal.fire({
          title: "Payment Status",
          text: "Payment Paid Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    // <form id="payment-form" onSubmit={handleSubmit}>
    //   <LinkAuthenticationElement
    //     id="link-authentication-element"
    //     onChange={(e: any) => setEmail(e?.target?.value)}
    //   />
    //   <PaymentElement id="payment-element" options={paymentElementOptions} />
    //   <button
    //     disabled={isLoading || !stripe || !elements}
    //     id="submit"
    //     className="btn btn-primary w-100 mt-3"
    //   >
    //     <span id="button-text">
    //       {isLoading ? <CircularProgress /> : "Pay now"}
    //     </span>
    //   </button>
    //   {/* Show any error or success messages */}
    //   {message && (
    //     <div
    //       id="payment-message"
    //       className="my-2 flex items-center justify-center rounded bg-red-300 py-2 text-black"
    //     >
    //       {message}
    //     </div>
    //   )}
    // </form>
    <PayPalScriptProvider
      options={{
        "client-id":
          "Ae2ZiSJ9GAaM2q-14eIATzab5MGz_puSBg4qfFhQeKA2MiN_gPPD28lwdI8ELX6pJWKeo1SBVtaErMmb",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrderJK}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
}
