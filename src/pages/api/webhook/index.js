import Stripe from "stripe";
import {butter} from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
    api: {
        bodyParser: false
    },
}