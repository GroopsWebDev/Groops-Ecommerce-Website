import React from 'react'
import Navbar from '~/components/navbar'
import Footer from '~/components/footer'
import { SignIn } from "@clerk/clerk-react";

const SignInCustom = () => {
  return (
    <div>
        <Navbar />
            <SignIn />
        <Footer />
        
    </div>
  )
}

export default SignInCustom