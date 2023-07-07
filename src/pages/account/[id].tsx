import PersonalInfo from "../../components/account/info2";
import DeliveryAddress from "../../components/account/address";
import PaymentMethods from "../../components/account/payment";
import ChangePassword from "../../components/account/password";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import { Email } from "@clerk/nextjs/dist/types/server";

const Account: React.FC = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!user) return null;
  return (
    <div className="flex bg-gray-100 py-5">
      {/* profile sidebar */}
      <div className="flex w-[20%] flex-col items-center">
        <h1 className="text-2xl font-bold">Your Account</h1>
        {/* profile image */}
        <Image
          className="mt-10 h-32 w-32 rounded-full"
          src={user!.profileImageUrl}
          alt=""
          width={100}
          height={100}
        />

        <h2 className="mt-5 text-xl">{user!.fullName}</h2>
        <h2 className="mt-3 text-xl">{user!.username}</h2>
        <p className="mt-5 text-sm text-gray-600">
          {String(user!.primaryEmailAddress)}
        </p>
        <p className=" text-sm text-gray-600">
          {String(user!.primaryPhoneNumber)}
        </p>

        <p className="mt-10 text-gray-600">Personal Information</p>
        <p className="mt-3 text-gray-600">Delivery Addresses</p>
        <p className="mt-3 text-gray-600">Payment Methods</p>
        <p className="mt-3 text-gray-600">Change Password</p>
      </div>
      {/* middle line */}
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
