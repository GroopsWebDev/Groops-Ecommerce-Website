import React, { useEffect } from "react";
import { useState } from "react";

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

  return (
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-2xl font-bold">Checkout</h1>

      <form
        className="grid grid-cols-1 gap-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.name && <span>This field is required</span>}
          </div>
        </div>

        <div>
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

        <div>
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
              type="text"
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

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <div className="mt-1">
            <input
              {...register("address", { required: true })}
              type="text"
              name="address"
              id="address"
              autoComplete="given-name"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.address && <span>This field is required</span>}
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <div className="mt-1">
            <input
              {...register("city", { required: true })}
              type="text"
              name="city"
              id="city"
              autoComplete="given-name"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.city && <span>This field is required</span>}
          </div>
        </div>

        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <div className="mt-1">
            <input
              {...register("state", { required: true })}
              type="text"
              name="state"
              id="state"
              autoComplete="given-name"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.state && <span>This field is required</span>}
          </div>
        </div>

        <div>
          <label
            htmlFor="zipCode"
            className="block text-sm font-medium text-gray-700"
          >
            Zip Code
          </label>
          <div className="mt-1">
            <input
              {...register("zipCode", { required: true })}
              type="text"
              name="zipCode"
              id="zipCode"
              autoComplete="given-name"
              className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {errors.zipCode && <span>This field is required</span>}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
