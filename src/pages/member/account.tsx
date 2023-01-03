import React from "react";
//nextAuth
import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";

const Account = () => {
  return (
    <>
      <div className="text-6xl">
        Account Page
      </div>
    </>
  );
};

export default Account;
