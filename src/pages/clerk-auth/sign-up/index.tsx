import { SignUp } from "@clerk/nextjs";
import { SignUpButton } from "@clerk/nextjs";

const SignUpPage = () => {

  return(
  <>
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in"/>
    <h1>SignUpPage</h1>
    <SignUpButton />
  </>
  )
};

export default SignUpPage;