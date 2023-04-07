import React, { useState } from "react";

import HelpCenter from "../../components/help/help-center";
import Divider from "../../components/shoppingCart/divider";
import MyProfile from "../../components/userCenterText/myProfile";
import MyOrders from "../../components/userCenterText/myOrders";
import MyAddress from "../../components/userCenterText/myAddress";
import Lovelist from "../../components/userCenterText/lovelist";
import MyWallet from "../../components/userCenterText/myWallet";
//个人用户中心

import { useEffect } from "react";
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
  postCode: yup.string().required("post code field is required"),
});

const UserCenter = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  const sideMenuStyle = `bg-[#5B196A] hover:bg-purple-600 py-4 pl-16 bg-purple-900`;
  
  const [imageURL, setImageURL] = useState();
  const [fileData, setFileData] = useState<any>();
  const router = useRouter();
  const { data: sessionData } = useSession();
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
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
        fileData?.name != undefined
          ? bucketName + "/" + fileData?.name
          : imageURL,
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
      // redirect to the home page here
      router.push("/member");

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
    setIsLoading(true);
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
        setIsLoading(false);
      });
      setImageURL(json.user.image);
      setIsLoading(false);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    setStatus(true);
  }, []);

  if (sessionData != undefined && status == true) {
    setStatus(false);
    getSelectedUserData(sessionData);
  }

  return (
    <>
      <div
        style={{
          fontSize: "1.2rem",
          width: "100%",
          height: "100%",
          display: "flex",
          fontWeight: "500",
        }}
      >
        <div
          style={{
            width: "404px",
            background:
              "url(https://www.helloimg.com/images/2023/03/05/oaZtwD.png)",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            {/* <img style={{ position: 'absolute', zIndex: '-1' }} src="https://www.helloimg.com/images/2023/03/05/oaZtwD.png" alt="" /> */}

            <div style={{ width: "100%", display: "flex", marginTop: "2rem" }}>
              <img
                src="https://img2.baidu.com/it/u=1280470016,4135597666&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                alt=""
                style={{
                  margin: "2rem",
                  width: "6rem",
                  height: "6rem",
                  borderRadius: "50%",
                }}
              />

              <div style={{ color: "#ffffff" }}>
                <div style={{ marginTop: "3rem" }}>Cartier Ngai </div>
                <p style={{ overflowWrap: "anywhere" }}>@212121221@qq.com</p>
              </div>
            </div>
          </div>

          {/* 选择菜单 */}
          <div>
            <ul
              style={{
                fontWeight: "600",
                fontSize: "1.3rem",
                color: "#ffffff",
                cursor: "pointer",
                paddingLeft: "0px",
              }}
            >
              <li
                onClick={() => {
                  setMenuIndex(0);
                }}
                className={`bg-[#5B196A] bg-purple-900 py-4 pl-16 hover:bg-purple-600`}
              >
                {" "}
                My Profile
              </li>
              <li
                onClick={() => {
                  setMenuIndex(1);
                }}
                className={sideMenuStyle}
              >
                My Orders
              </li>
              <li
                onClick={() => {
                  setMenuIndex(2);
                }}
                className={sideMenuStyle}
              >
                My Addresses
              </li>
              <li
                onClick={() => {
                  setMenuIndex(3);
                }}
                className={sideMenuStyle}
              >
                Lovelist
              </li>
              <li
                onClick={() => {
                  setMenuIndex(4);
                }}
                className={sideMenuStyle}
              >
                My Wallet
              </li>
            </ul>
          </div>
        </div>

        <div></div>
        {/* 菜单 */}
        <div></div>

        <div style={{ marginLeft: "0rem", width: "80%", height: "800px" }}>
          {menuIndex == 0 ? (
            <MyProfile></MyProfile>
          ) : menuIndex == 1 ? (
            <MyOrders></MyOrders>
          ) : menuIndex == 2 ? (
            <MyAddress></MyAddress>
          ) : menuIndex == 3 ? (
            <Lovelist></Lovelist>
          ) : (
            <MyWallet></MyWallet>
          )}
        </div>
      </div>
    </>
  );
};


export default UserCenter;
