import { UserProfile } from "@clerk/nextjs";
import DeliveryAddress from "~/components/account/address";
import PaymentMethods from "~/components/account/payment";

const UserProfilePage = () => (
  <>
    <div className="flex items-center justify-center">
      <UserProfile
        appearance={{
          elements: {
            profileSectionPrimaryButton__username: "hover:bg-rose-100",
            nternal_rscu79: "text-rose-100", //not working
          },
        }}
      />
    </div>
    <div className="flex items-center justify-center">
    <div className="w-[80%] px-36 py-16">
      <DeliveryAddress />
    </div>
    </div>

    <div className="flex items-center justify-center">
    <div className="w-[80%] px-36 ">
      <PaymentMethods />
    </div>
    </div>
  </>
);

export default UserProfilePage;
