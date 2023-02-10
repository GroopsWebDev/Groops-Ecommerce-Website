import React, { useState } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsGithub, BsTwitter, BsGoogle } from "react-icons/bs";
import GoogleButton from "react-google-button";

const Signin = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const [email, setEmail] = useState("");

  if (status === "loading") return <div>Checking Authentication...</div>;

  if (session) {
    setTimeout(() => {
      push("/");
    }, 1000);

    push("/"); //redirect back to Home page
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email) return false;

    signIn("email", { email, redirect: false });
  };

  return (
    <>
      <div className="grid h-screen place-items-center">
        <GoogleButton
          onClick={() => {
            signIn('google')
          }}
        />
      </div>
    </>
  );
};

export default Signin;
