import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/router';


type FormValues = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePassword = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  async function  onSubmit (data :any) {

    const result = await fetch("/api/user/changePassword", {
        method: "POST",
        body: JSON.stringify(data),   
        headers: {
          "Content-Type": "application/json",
        },
      });
    
      if (result) {
        router.push("/userSetting")
      } else {
        // Error occurred while creating user
      }
  };

  return (
    <div className="shadow-lg rounded-md p-6">
      <h2 className="text-lg-center font-bold mb-4">Change Password</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          justifyContent: "center",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          borderRadius: "10px",
          padding: "50px",
          marginLeft: "500px",
          marginRight: "500px",
        }}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="oldPassword"
          >
            Old Password
          </label>
          <Controller
            control={control}
            name="oldPassword"
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                {...field}
                className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="oldPassword"
                name="oldPassword"
                type="password"
              />
            )}
          />
          {errors.oldPassword && <p>This field is required</p>}
        </div>

        
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <Controller
            control={control}
            name="newPassword"
            defaultValue=""
            rules={{ required:true, minLength: 8 }}
            render={({ field }) => (
            <input
            {...field}
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            name="newPassword"
            type="password"
            />
            )}
            />
            {errors.newPassword && errors.newPassword.type === "required" && (
            <p>This field is required</p>
            )}
            {errors.newPassword && errors.newPassword.type === "minLength" && (
            <p>Password must be at least 8 characters long</p>
            )}
            </div>


            <div className="mb-4">
            <label
                     className="block text-gray-700 font-bold mb-2"
                     htmlFor="confirmPassword"
                   >
            Confirm New Password
            </label>
            <Controller
            control={control}
            name="confirmPassword"
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
            <input
            {...field}
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            />
            )}
            />
            {errors.confirmPassword && <p>This field is required</p>}
            </div>
            <button
                   type="submit"
                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                 >
            Change Password
            </button>
            </form>
            </div>
            );
            };
            
            export default ChangePassword;