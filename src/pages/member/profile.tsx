import React from "react";
//nextAuth
import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { api } from "../../utils/api";

const Profile = () => {
  const userName = api.example.getUserID.useQuery();
  return (
    <>
      <div className="text-6xl">Account Profile Page</div>

      {userName.data ? (
        <div>
          <span className="text-xl"> userId from Prisma:</span> {userName.data} <span>(testing backend query using TRPC & Prisma)</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Profile;
