import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return { props: {} };
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      setErrorMsg(result.error);
    } else {
      push("/");
    }
  };

  return (
    <div style={{textAlign:"center", border: "1px solid #ccc", padding: "10px", marginLeft:"500px", marginRight:"500px", marginBottom:"30px", background:"#E8F485 "}}>
      <form onSubmit={handleSubmit}>
        <div style={{padding:"10px"}}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ border: "1px solid #ccc", padding: "10px", marginLeft:"30px" }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ border: "1px solid #ccc", padding: "10px", marginLeft:"55px" }}
          />
        </div>
        {errorMsg && <p>{errorMsg}</p>}
        <Button type="submit" style={{marginTop:"30px"}}>Sign in</Button>
      </form>
      <GoogleButton style={{marginLeft:"130px", marginTop:"30px", marginBottom:"50px"}}
          onClick={() => {
            signIn('google')
          }}
        />
    </div>
  );
};

export default LoginPage;