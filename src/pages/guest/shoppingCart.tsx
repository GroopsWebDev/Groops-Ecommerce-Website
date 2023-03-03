import React from "react";
import { GetServerSideProps } from "next";
//nextAuth
import { useSession, getSession } from "next-auth/react";

//When I click login, it will redirect to the Member page
export const getServerSideProps: GetServerSideProps = async (req) => {
  const session = await getSession(req);
  if (session) {
    return {
      redirect: {
        destination: "/member/shoppingCart",
        permanent: false,
      },
    };
  }
  return { props: { session } };
};

const ShoppingCart = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <div className=" text-6xl">
        Guest Cart Page (Log in to see your cart)
      </div>
    </>
  );
};

export default ShoppingCart;
