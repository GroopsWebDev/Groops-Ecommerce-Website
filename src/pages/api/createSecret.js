import { Stripe } from "stripe";
const stripe = new Stripe(
  "sk_test_51MCWFKI3CTiTs4JqSMOnqsY2c2ZotTNkLMQ1KmQN2ICp3e4haPzmGP7Iuu1Otf7gFIn0ZOM3ObZTr3kghaa5G1Ef00X3qMPPjZ",
  { apiVersion: "2020-08-27" }
);

// This is your test secret API key.
// const stripe = require("stripe")(
//   "sk_test_51MCWFKI3CTiTs4JqSMOnqsY2c2ZotTNkLMQ1KmQN2ICp3e4haPzmGP7Iuu1Otf7gFIn0ZOM3ObZTr3kghaa5G1Ef00X3qMPPjZ"
// );

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

export default async function handler(req, res) {
  const { amount } = req.body;
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
      
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(500).json({ messae: e.message });
  }
}


