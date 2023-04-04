import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

type Item = {
  amount: any;
};

type props = {
  total: number;
  groupId: string;
  salesTax: number;
  tipDelivery: string;
  delivery: number;
  greenFee: number;
};

type IOption = {
  "client-id": string;
};

function CheckoutForm({
  groupId,
  salesTax,
  delivery,
  tipDelivery,
  greenFee,
  total,
}: props) {
  const items: Item = {
    amount: {
      value: total,
    },
  };
  const { data: sessionData } = useSession();
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [disbale, setDisabled] = useState(false);
  const options: IOption = {
    "client-id":
      "Ac10w7nB1ajnCTJaCXeynxFdKTxZ4AkSkr834dFwKhGjvXRXIlKsvXKX-VdShQwAxr3wZyLrM5sR1HSB",
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [items],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      if (details.status == "COMPLETED") {
        setDisabled(true);
        setMessage("Payment successful!");
        createOrderPaypal(details.purchase_units[0].payments.captures[0].id);
      } else {
        setMessage(details.status);
      }
    });
  };

  const createOrderPaypal = async (payment_intent: any) => {
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
      })
      .catch((e) => {
        setMessage("An unexpected error occurred.");
      });
  };

  return (
    <PayPalScriptProvider options={options}>
      {message && (
        <p className="flex items-center justify-center p-2">
          Payment successful!
        </p>
      )}
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        style={{ layout: "vertical" }}
        disabled={disbale}
      />
    </PayPalScriptProvider>
  );
}

export default CheckoutForm;
