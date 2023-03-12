import React from "react";
//nextAuth
import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

const Cart = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <div className="text-6xl">
        Member Cart Page
      </div>
    </>
  );
};

export default Cart;
