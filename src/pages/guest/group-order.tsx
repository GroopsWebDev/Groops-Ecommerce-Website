import React from "react";
import { GetServerSideProps } from "next";
//nextAuth
import { useSession, getSession } from "next-auth/react";

const groupOrder = () => {
  return (
    <>
      <div className="text-6xl">
        Guest Group Order Page
      </div>
    </>
  );
};

export default groupOrder;
