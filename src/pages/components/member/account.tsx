import React from "react";
import Header from "../header";
//nextAuth
import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

//When I click logout, it will redirect to the guestHome page
export const getServerSideProps: GetServerSideProps = async (req) => {
    const session = await getSession(req);
    console.log("session", session);
    if (!session) {
      return {
        redirect: {
          destination: "/components/guest/home",
          permanent: false,
        },
      };
    }
  
    return { props: { session } };
  };

const Account = () => {
  return (
    <>
      <Header />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
        Account Page
      </div>
    </>
  );
};

export default Account;
