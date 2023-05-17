import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useSession } from "next-auth/react";

type FormValues = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const schema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("New password is required"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm new password is required"),
});

function ChangePasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { data: sessionData } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(sessionData?.user);
      setIsLoading(true);
      const response = await axios.post("/api/user/changePassword", {
        ...data,
        id: sessionData?.user?.email,
      });
      if (response.data.status == 200) {
        setIsSuccess(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        alert(response.data.message);
      }
    } catch (err) {
      setIsLoading(false);
      alert("something went wrong");
    }
  };

  return (
    <div
      style={{
        //display: "flex",
        alignItems: "center",
        //height: "100%"
      }}
      className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-md space-y-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Change Password
          </h2>
        </div>
        {isSuccess ? (
          <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.707 5.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 13.586l8.293-8.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Password changed successfully.
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="h-75 mb-8  rounded-md p-4 shadow-sm">
                  <div>
                    <label
                      htmlFor="currentPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Current password
                    </label>
                    <input
                      id="currentPassword"
                      type="password"
                      autoComplete="current-password"
                      {...register("currentPassword")}
                      className={`appearance-none rounded-none ${
                        errors.currentPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:shadow-outline mb-1 w-full px-3 py-2 leading-tight focus:outline-none`}
                      placeholder="Current password"
                    />
                    {errors.currentPassword && (
                      <p className="text-xs italic text-red-500">
                        {errors.currentPassword.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New password
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      autoComplete="new-password"
                      {...register("newPassword")}
                      className={`appearance-none rounded-none ${
                        errors.newPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:shadow-outline mb-1 w-full px-3 py-2 leading-tight focus:outline-none`}
                      placeholder="New password"
                    />
                    {errors.newPassword && (
                      <p className="text-xs italic text-red-500">
                        {errors.newPassword.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="confirmNewPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm new password
                    </label>
                    <input
                      id="confirmNewPassword"
                      type="password"
                      {...register("confirmNewPassword")}
                      className={`appearance-none rounded-none ${
                        errors.confirmNewPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:shadow-outline mb-1 w-full px-3 py-2 leading-tight focus:outline-none`}
                      placeholder="Confirm new password"
                    />
                    {errors.confirmNewPassword && (
                      <p className="text-xs italic text-red-500">
                        {errors.confirmNewPassword.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <svg
                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 018 8v-4a4 4 0 00-4-4h-4zm-4 4a4 4 0 100-8H8a8 8 0 018 8z"
                        ></path>
                      </svg>
                    ) : null}
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChangePasswordForm;
