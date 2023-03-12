import React from "react";
import { GetServerSideProps } from "next";
//nextAuth
import { useSession, getSession } from "next-auth/react";

//When I click logout, it will redirect to the guestHome page
// export const getServerSideProps: GetServerSideProps = async (req) => {
//   const session = await getSession(req);
//   if (!session) {
//     return {
//       redirect: {
//         destination: "/components/guest/group-order",
//         permanent: false,
//       },
//     };
//   }
//   return { props: { session } };
// };

const groupOrder = () => {
  return (
    <>

      <div className="text-6xl">
        Member Group Order Page
      </div>
    </>
  );
};

export default groupOrder;
