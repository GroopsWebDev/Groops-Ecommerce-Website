import React, { useEffect } from "react";
import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';



import { useForm } from "react-hook-form";
const apiUrl = "http://localhost:3000/api/";
import { useRouter } from "next/router";
const baseUrl = "http://localhost:3000/";

const CheckoutPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {

    const response = await fetch(apiUrl + "cart/checkout", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response) {
      router.push(baseUrl + "/product/init");
    }
  }

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (elements == null) {
        return;
      }
  
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      //console.log(paymentMethod);
    };

  
    return (
      <div className="mt-5">
        <form onSubmit={handleSubmit}>
        <CardElement />
         <div className="row">
           <div className="col-md-12"> 
            <button className="btn btn-primary mt-3 w-100" type="submit" disabled={!stripe || !elements}>
              Pay
            </button>
          </div>
          </div> 
      </form>
      </div>
      
    );
  };
  
  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
  

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-2xl font-bold">Checkout Details</h1>
          <form
            className="grid grid-cols-1 gap-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="row">
            <div className="col-md-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  {...register("name", { required: true, pattern: /^[A-Za-z]+$/ })}
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.name && <span>This field is required and enter only text</span>}
              </div>
            </div>
            <div  className="col-md-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="col-md-4">
              <label
                htmlFor="mobile-number"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <div className="mt-1">
                <input
                  {...register("mobileNumber", { required: true, minLength: 10 })}
                  id="mobileNumber"
                  name="mobileNumber"
                  type="number"
                  autoComplete="cc-number"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.mobileNumber && (
                  <span>
                    This field is required and should have a minimum length of 10
                  </span>
                )}
              </div>
            </div>

            <div className="col-md-12">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <div className="mt-1">
                <textarea
                {...register("address", { required: true })}
                name="address"
                id="address"
                autoComplete="given-name"
                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                </textarea>
                {errors.address && <span>This field is required</span>}
              </div>
            </div>
            <div className="col-md-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="mt-1">
                <input
                  {...register("city", { required: true, pattern: /^[A-Za-z]+$/ })}
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="given-name"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.city && <span>This field is required and enter only text</span>}
              </div>
            </div>

            <div className="col-md-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <div className="mt-1">
                <input
                  {...register("state", { required: true, pattern: /^[A-Za-z]+$/ })}
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="given-name"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.state && <span>This field is required and enter only text</span>}
              </div>
            </div>

            <div className="col-md-4">
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <div className="mt-1">
                <input
                  {...register("zipCode", { required: true, minLength: 6 })}
                  type="number"
                  name="zipCode"
                  id="zipCode"
                  autoComplete="given-name"
                  className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.zipCode && <span>This field is required and should have a minimum length of 6</span>}
              </div>
            </div>

            <div className="col-md-12 pt-4 text-right">
              <button
                type="submit"
                className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Place Order
              </button>
            </div>
            </div>
          </form>
        </div>
    </div>
    <div className="col-md-6">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-2xl font-bold">Payment Method</h1>
          <div className="card" style={{background:"#d7d7d75e"}}>
              <div className="card-body"><input type="radio" className="mr-2" name="paymentMethodType" value="payPal"/>PayPal</div>    
                {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider> */}   
                {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider> */}
                </div>
                <div className="card mt-3" style={{background:"#d7d7d75e"}}>
              <div className="card-body"><input type="radio" className="mr-2" name="paymentMethodType" value="stripe"/>Stripe</div>    
                {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider> */}   
                {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
                    <PayPalButtons style={{ layout: "horizontal" }} />
                </PayPalScriptProvider> */}
                </div>
               <div>  
          </div>
          </div>           
    </div>
    </div>
  );
};

export default CheckoutPage;
