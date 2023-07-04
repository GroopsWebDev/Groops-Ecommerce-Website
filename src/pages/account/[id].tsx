import { useState } from "react";
import PersonalInfo from "../../components/account/info";
import DeliveryAddress from "../../components/account/address";
import PaymentMethods from "../../components/account/payment";
import ChangePassword from "../../components/account/password";

const Account: React.FC = () => {
  return (
    <div className="flex bg-gray-200 py-5">
      <div className="flex w-[20%] flex-col items-center">
        <h1 className="text-2xl font-bold">Your Account</h1>

        <img
          className="mt-10 w-1/2 rounded-full"
          src="/assets/dummy/product.png"
        />

        <h2 className="mt-5 text-xl">Name</h2>

        <p className="mt-5 text-sm text-gray-600">example@email.com</p>
        <p className=" text-sm text-gray-600">+1 833 222 2222</p>

        <p className="mt-10 text-gray-600">personal information</p>
        <p className="mt-3 text-gray-600">Delivery Address</p>
        <p className="mt-3 text-gray-600">Payment Methods</p>
        <p className="mt-3 text-gray-600">Change Password</p>
      </div>

      <div className=" w-[1px] bg-gray-300"></div>

      <div className="w-[80%] px-36 py-16">
        <h1 className="mb-3 text-2xl">Personal information</h1>
        <PersonalInfo />
        <h1 className="mb-3 mt-10 text-2xl">Delivery Addresses</h1>
        <DeliveryAddress />
        <h1 className="mb-3 mt-10 text-2xl">Payment Methods</h1>
        <PaymentMethods />
        <h1 className="mb-3 mt-10 text-2xl">Change Password</h1>
        <ChangePassword />
      </div>
    </div>
  );
};

export default Account;
