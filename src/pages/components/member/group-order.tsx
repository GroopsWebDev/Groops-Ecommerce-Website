import React from 'react'
import Header from '../header'
import { GetServerSideProps } from "next";
//nextAuth
import { useSession, getSession } from "next-auth/react";

//When I click logout, it will redirect to the guestHome page
export const getServerSideProps: GetServerSideProps = async (req) => {
  const session = await getSession(req);
  if (!session) {
    return {
      redirect: {
        destination: "/components/guest/group-order",
        permanent: false,
      },
    };
  }

  return { props: { session } };
};

const groupOrder = () => {
  return (
    <>
      <Header/>
      
      <div className='absolute text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      Member Group Order Page
      </div>
    </>

  )
}

export default groupOrder