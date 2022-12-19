import React from "react";
import Header from "./header";
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
        destination: "/components/guestHome",
        permanent: false,
      },
    };
  }

  return { props: { session } };
};


const Cart = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Header />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl">
        Cart Page
      </div>
    </>
  );
};

export default Cart;
