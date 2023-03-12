import { useState } from "react";
import React, { useEffect } from "react";
import Head from "next/head";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as yup from "yup";
import axios from "axios";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";
import { ImageUploader } from "../../utils/imageUpload";
import { CircularProgress } from "@mui/material";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("full name field is required")
    .matches(/^[A-Za-z]+[A-Za-z ]*$/, "full name must be alphabet characters.")
    .min(2, "Needs at least 2 Character")
    .max(100, "Please enter a full name less than 100 character"),

  phone: yup.string().required("phone number field is required"),
  postCode: yup.number().required("post code field is required"),
});
const userSetting = () => {
  const [imageURL, setImageURL] = useState();
  const [fileData, setFileData] = useState<any>();
  const router = useRouter();
  const { data: sessionData } = useSession();
  const [loading, setLoading] = useState(false);
  const endPointURl = "https://api.gr-oops.com";

  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    pinCode: "",
    paymentMethod: "",
    password: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    profilePicture: "",
  });

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (sessionData != undefined) {
    getSelectedUserData(sessionData);
  }

  const inputStyle = {
    padding: "5px 10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const bucketName = "img";

  const handleProfilePictureChange = (e: any) => {
    const file = e.target.files[0];
    setFileData(file);
    ImageUploader(file);
    setUser({
      ...user,
      profilePicture: URL.createObjectURL(file),
    });
  };

  async function onSubmit(data: any) {
    setLoading(true);
    const rObj = {
      address: data.address,
      // firstname: data.firstname,
      // lastname: data.lastname,
      name: data.name,
      phoneNumber: data.phone,
      image:
        fileData?.name != undefined ? bucketName + "/" + fileData?.name : "",
      postCode: data.postCode.toString(),
      userId: sessionData?.user?.id,
    };
    const result = await axios.post("/api/user/update", rObj);
    if (result.data.status == 200) {
      setLoading(false);
      Swal.fire({
        title: "Profile",
        text: "Profile Update Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      setLoading(false);
      Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
      });
    }
  }

  async function getSelectedUserData(dataGet: any) {
    const userId = dataGet?.user.id;
    const response = await fetch("/api/user/" + userId);
    const json = await response.json();
    if (json.status === 200) {
      const fields = ["name", "phone", "address", "postCode"];
      fields.forEach((field) => {
        if (json.user[field]) {
          setValue(field, json.user[field]);
        } else {
          setValue(field, "");
        }
      });
      setImageURL(json.user.image);
    }
  }

  useEffect(() => {
    //setData(sessionData?.user);
    //setData(sessionData?.user);
    //getSelectedUserData()
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>User Settings | My App</title>
        </Head>
        <div className="border-1 mx-auto mt-10 mb-12 flex max-w-6xl rounded-md p-6 shadow-lg">
          <div className="mx-6 w-1/2 pr-8">
            <div style={{ marginLeft: "200px", marginTop: "150px" }}>
              <div className="mr-4 h-32 w-32 overflow-hidden rounded-full shadow-sm">
                <img
                  src={
                    user.profilePicture == ""
                      ? endPointURl + "/" + imageURL
                      : user.profilePicture
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div style={{ marginLeft: "200px" }}>
              <label className="focus:shadow-outline mt-5 cursor-pointer rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none">
                Choose Image
                <input
                  type="file"
                  className="hidden"
                  name="profilePicture"
                  onChange={handleProfilePictureChange}
                />
              </label>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="mb-6 text-2xl font-bold">User Settings</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="name"
                >
                  full name
                </label>

                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="name"
                      name="name"
                      style={inputStyle}
                    />
                  )}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>full name is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <Controller
                  control={control}
                  name="phone"
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="phone"
                      name="phone"
                      style={inputStyle}
                    />
                  )}
                />

                {errors.phone && (
                  <span style={{ color: "red" }}>phone number is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="address"
                >
                  Address
                </label>
                <Controller
                  control={control}
                  name="address"
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="address"
                      name="address"
                      style={inputStyle}
                    />
                  )}
                />

                {errors.address && (
                  <span style={{ color: "red" }}>address is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="postCode"
                >
                  Post Code
                </label>
                <Controller
                  control={control}
                  name="postCode"
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="postCode"
                      name="postCode"
                      style={inputStyle}
                    />
                  )}
                />

                {errors.postCode && (
                  <span style={{ color: "red" }}>post code is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="paymentType"
                >
                  Payment Method
                </label>
                <select
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                  id="paymentType"
                  name="paymentType"
                  //  value={user.paymentType}
                >
                  {/* <option value="">-- Select Payment Method --</option> */}
                  <option value="paypal">Paypal</option>
                  <option value="debit-card">Visa</option>
                </select>
              </div>

              <button
                type="submit"
                className="focus:shadow-outline mx-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              >
                {loading ? (
                  <CircularProgress style={{ color: "white" }} />
                ) : (
                  "Save"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default userSetting;
