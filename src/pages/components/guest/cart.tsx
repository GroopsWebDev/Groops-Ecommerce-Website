import React from "react";
import Header from "../header";
import { GetServerSideProps } from "next";
//nextAuth
import { useSession, getSession } from "next-auth/react";

//When I click logout, it will redirect to the Member page
export const getServerSideProps: GetServerSideProps = async (req) => {
  const session = await getSession(req);
  if (session) {
    return {
      redirect: {
        destination: "/components/member/cart",
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
        Guest Cart Page
      </div>
    </>
  );
};

export default Cart;
