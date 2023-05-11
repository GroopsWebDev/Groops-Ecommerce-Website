import { SignIn } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";

const SignInPage = () => {

  return(
  <>
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    <h1>SignInPage</h1>
    <SignInButton />
  </>
  )
};

export default SignInPage;