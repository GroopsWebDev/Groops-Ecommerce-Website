import { signIn } from "next-auth/react";
import GoogleButton from "react-google-button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

const schema = yup.object().shape({
  email: yup
    .string()
    .max(255)
    .required("Must be a valid email"),
  password: yup
  .string()
  .max(255)
  .required("Password is required"),
});

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const buttonStyle = {
    padding: "10px",
    // backgroundImage: 'linear-gradient(to right, #9B5DE5, #F15BB5)',
    backgroundImage: "linear-gradient(to right, #9b59b6,#e74c3c 50%, #f39c12)",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "50px",
  };

<<<<<<< HEAD
  
=======
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

>>>>>>> 1265b7f6fe8bb977b8cfc788c4f409ebb7bb4f1b
  const onSubmit = async (data: any) => {
    setLoading(true);
    const result: any = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });
    if (result.ok) {
      router.push(result.url);
      setLoading(false);
    }
    setError(true);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">

        <Controller
            control={control}
            name="email"
            defaultValue=""
            render={({ field }) => <input {...field} 
            required 
            type="email" 
            id="email" 
            name="email" 
            autoComplete="email" 
            className="focus block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500
                    focus:outline-none focus:ring-indigo-500 sm:text-sm"/>}
            />
             {errors.email && (
                <span style={{ color: 'red' }}>{errors.email['message']}</span>
                )}
            
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">

                <Controller
                  control={control}
                  name="password"
                  defaultValue=""
                  render={({ field }) => <input {...field} 
                  required
                  type="password" 
                  id="password" 
                  autoComplete="current-password"
                  className="focus block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500
                    focus:outline-none focus:ring-indigo-500 sm:text-sm"/>}
                  />
             {errors.password && (
                <span style={{ color: 'red' }}>{errors.password['message']}</span>
                )}

              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                style={buttonStyle}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="relative flex justify-center py-4 text-sm">
              <GoogleButton
                onClick={() => {
                  signIn("google", { callbackUrl: "/" });
                }}
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Not a member yet!
                </span>
              </div>
            </div>

            <div className="relative flex justify-center py-4 text-sm">
              <p>
                <span className="text-black-500 bg-white px-2">
                  <span style={{ textDecoration: "none", color: "black" }}>
                    <a href="/register">Join </a>
                  </span>
                  to unlock the best of Groops!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
