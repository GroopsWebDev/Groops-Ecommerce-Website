import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import HelpCenter from "../../components/help/help-center";
import Divider from "../../components/shoppingCart/divider";
import React, { useEffect } from "react";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../checkout/checkoutform";
import { Button, Modal } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";
import Swal from "sweetalert2";

//团购-订单确认

const schema = Yup.object().shape({
  firstname: Yup.string()
    .matches(/^[A-Za-z]+[A-Za-z ]*$/, "First name must be alphabet characters.")
    .min(2, "Needs at least 2 Character")
    .max(100, "Please enter a First name less than 100 character")
    .required("First name is required"),
  lastname: Yup.string()
    .matches(/^[A-Za-z]+[A-Za-z ]*$/, "Last name must be alphabet characters.")
    .min(2, "Needs at least 2 Character")
    .max(100, "Please enter a Last name less than 100 character")
    .required("Last name is required"),
  email: Yup.string()
    .trim()
    .email("Must be a valid email")
    .max(255)
    .required("Please enter the required field")
    .matches(
      /^([a-zA-Z0-9_+0-9\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
      "Please enter valid email address."
    ),
});

function orderConfirm() {
  const imagePath = "https://api.gr-oops.com/";
  const [cartItem, setCartItem] = useState<any>([]);
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();
  const [address, setAddress] = useState([]);
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [customeStatus, setCustomeStatus] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [clientSecret, setClientSecret] = useState("");
  const [formStatus, setFormStatus] = useState(true);
  const [custome, setCustome] = useState();
  const stripePromise = loadStripe(
    "pk_test_51MCWFKI3CTiTs4JqLIbwXO682cGFbfqKkbAQJjfFfkSvGcwjA0GDZvgZkGlFPFTG7ve6CvBRh0IhQtU1Hp9q8Y5I00pmlT9A2M"
  );
  const {
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [groupId, setGroupId] = useState<any>(null);

  useEffect(() => {
    setGroupId(localStorage.getItem("groupId"));
    async function fetchData() {
      const response = await fetch("/api/cart/getcart");
      const data = await response.json();
      setCartItem(data);
    }

    fetchData();
    getAddress();
  }, []);

  useEffect(() => {
    getAddress();
  }, [step]);

  async function createSecret() {
    axios
      .post("/api/createSecret", {
        amount: parseFloat(total.toFixed(2)),
      })
      .then((res: any) => setClientSecret(res.data.clientSecret))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    const sub_total = cartItem.reduce(
      (acc: any, item: any) => acc + item.product.price * item.qty,
      0
    );
    setSubTotal(sub_total);
    setTotal(sub_total);
  }, [cartItem]);

  useEffect(() => {
    if (total > 0) {
      createSecret();
    }
  }, [total]);

  const handlePrimaryAddress = (event: any) => {
    if (event.target.checked == true) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const handleBackPage = () => {
    setStep(1);
  };

  const handleStatusChanges = () => {
    setCustomeStatus(true);
  };
  const handleTextChanges = (event: any) => {
    setCustome(event.target.value);
  };

  const handleFormStatus = (type: any) => {
    if (type == "shippingForm") {
      reset({
        firstName: "",
        lastName: "",
        city: "",
        postalCode: "",
        address1: "",
        address2: "",
      });
      setFormStatus(true);
    } else {
      reset({
        firstName: "",
        lastName: "",
        city: "",
        postalCode: "",
        address1: "",
        address2: "",
      });
      setFormStatus(false);
    }
  };

  async function onSubmit(data: any) {
    try {
      let rObj = {
        firstName: data.userType + "." + data.firstName,
        lastName: data.lastName,
        address1: data.address1,
        address2: data.address2,
        postalCode: data.postalCode,
        city: data.city,
        isPrimaryAddress: isChecked,
      };
      const response = await fetch("/api/shippingaddress/create", {
        method: "POST",
        body: JSON.stringify(rObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status == 200) {
        Swal.fire({
          title: "Shipping Address",
          text: "Shipping Address Add Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset({
          firstName: "",
          lastName: "",
          city: "",
          postalCode: "",
          address1: "",
          address2: "",
        });
        setStep(1);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const appearance: any = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  async function goToGroupOrder() {
    router.push("/group/list");
  }

  const getAddress = async () => {
    try {
      const res = await axios.get("/api/shippingaddress/get");
      if (res.data.status == 200) {
        setAddress(res?.data?.address);
      }
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <>
      <div className="orderConfirm">
        {step == 1 && (
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                width: "69%",
                backgroundColor: "#F9f8f6",
              }}
            >
              <div className="">
                <div
                  style={{
                    fontSize: "1.8rem",
                    marginLeft: "3rem",
                    marginTop: "2rem",
                  }}
                >
                  {" "}
                  Your Shopping Cart
                </div>
                {/* <div
                style={{
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  color: "rgb(0,116,186)",
                  borderBottom: "10px soild black",
                  textDecoration: "underLine",
                  margin: "3rem",
                }}
              >
                Sign in
              </div> */}
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                width: "69%",
                backgroundColor: "#F9f8f6",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  marginLeft: "3rem",
                  marginTop: "2rem",
                }}
              >
                {" "}
                Your Items
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Divider></Divider>
              </div>
              <div
                className="clear-right  divide-x-8 divide-gray-200"
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {cartItem.map((item: any, index: any) => (
                    <>
                      <div
                        style={{ width: "50%", display: "flex" }}
                        key={index}
                      >
                        <img
                          style={{
                            width: "14.87rem",
                            height: "11.6rem",
                            borderRadius: "35px",
                            marginTop: "30px",
                            marginLeft: "6%",
                            marginRight: "20px",
                          }}
                          className="border border-solid   border-gray-900"
                          src={imagePath + item["product"].image}
                          alt=""
                        />
                        <div style={{ marginTop: "2.5rem" }}>
                          {/* <div style={{ fontSize: '1.3rem' }} >1</div> */}
                          <div style={{ fontSize: "1.3rem" }}>
                            {item?.product?.englishProductName}
                          </div>
                          {/* <div style={{ fontSize: '1.3rem' }} >$</div> */}
                          <div
                            style={{ marginTop: "2rem", fontSize: "1.3rem" }}
                          >
                            Qty: {item.qty}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          width: "30%",
                          textAlign: "center",
                          lineHeight: "14rem",
                          color: "rgb(0,116,185)",
                          fontSize: "1.2rem",
                        }}
                      >
                        {item["product"].price * parseInt(item.qty)}
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "20px",
                width: "69%",
                backgroundColor: "#F9f8f6",
              }}
            >
              <div
                style={{
                  fontSize: "1.8rem",
                  marginLeft: "3rem",
                  marginTop: "2rem",
                }}
              >
                Delivery Options
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <Divider></Divider>
              </div>

              {/* radio */}
              <div style={{ marginLeft: "3rem" }}>
                <form>
                  <div className="radio " style={{ margin: "2rem" }}>
                    <label>
                      <input
                        style={{ color: "red", textIndent: "2rem" }}
                        type="radio"
                        defaultChecked
                        name="optradio"
                      />{" "}
                      Groops! Instant Delivery (24h guaranteed, only available
                      in Greater Montreal at this moment)
                    </label>
                  </div>
                  <div style={{ margin: "2rem" }} className="radio">
                    <label>
                      <input
                        style={{ color: "red", textIndent: "2rem" }}
                        type="radio"
                        name="optradio"
                      />{" "}
                      Pickup (Only available in Greater Montreal at this moment)
                    </label>
                  </div>
                  <div style={{ margin: "2rem" }} className="radio ">
                    <label>
                      <input
                        style={{ color: "red", textIndent: "2rem" }}
                        type="radio"
                        name="optradio"
                      />{" "}
                      Green Shipping (Available outside Montreal)
                    </label>
                  </div>
                </form>
              </div>

              <div style={{ marginLeft: "5rem" }}>
                <div
                  className="input-group mb-3"
                  style={{
                    width: "400px",
                    display: "flex",
                    lineHeight: "3rem",
                  }}
                >
                  Tips for your Deliverer{" "}
                  <input
                    style={{ marginLeft: "1rem" }}
                    type="text"
                    className="form-control border-dark border"
                    placeholder="$"
                    id="usr"
                    name="username"
                  />
                </div>

                <div style={{ paddingBottom: "3rem", paddingTop: "2rem" }}>
                  Our deliverers try their best to give you the best services,
                  so if you tip them they will be happy :)
                </div>
              </div>
            </div>
            {/* Primary Address */}
            {address.length > 0 &&
              address.map((address: any) => <AddressList address={address} />)}
            {/* End Primary Address */}

            <div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                  marginBottom: "5rem",
                }}
              >
                <button
                  onClick={() => setStep(2)}
                  className="border-grey-900 border-2 border-solid  border-current "
                  style={{
                    cursor: "pointer",
                    // boxShadow:
                    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    width: "15rem",
                    height: "5rem",
                    backgroundColor: "",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    lineHeight: "4.5rem",
                  }}
                >
                  New Address
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Shipping新地址 */}
        {step == 2 && (
          <>
            <div className="row p-4">
              <div className="col-md-6 text-right">
                <div
                  style={{
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                    width: "20rem",
                    height: "5rem",
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    lineHeight: "5rem",
                    marginLeft: "290px",
                  }}
                  onClick={() => handleFormStatus("shippingForm")}
                >
                  Shipping Address
                </div>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                    width: "20rem",
                    height: "5rem",
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    lineHeight: "5rem",
                    marginLeft: "290px",
                  }}
                  onClick={() => handleFormStatus("billingForm")}
                >
                  Billing Address
                </div>
              </div>
              {formStatus ? (
                <>
                  <div className="col-md-12">
                    <div
                      style={{
                        marginTop: "6rem",
                        backgroundColor: "#F9f8f6",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h2 className="pt-4">Add Shipping Address</h2>
                      <form
                        className="grid grid-cols-1 gap-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div>
                              <div className="form-check">
                                <input
                                  className="border-dark border"
                                  style={{ marginRight: "10px" }}
                                  type="checkbox"
                                  id="isPrimaryAddress"
                                  name="isPrimaryAddress"
                                  onChange={handlePrimaryAddress}
                                  checked={isChecked}
                                />
                                <label>Save as your primary address</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    style={{ margin: "30px" }}
                                    className="form-check"
                                  >
                                    <input
                                      {...register("userType", {
                                        required: true,
                                      })}
                                      style={{ marginRight: "10px" }}
                                      type="radio"
                                      id="radio1"
                                      name="userType"
                                      value="Ms"
                                      checked
                                    />
                                    <label className="form-check-label">
                                      Ms
                                    </label>
                                  </div>
                                  <div
                                    style={{ margin: "30px" }}
                                    className="form-check"
                                  >
                                    <input
                                      {...register("userType", {
                                        required: true,
                                      })}
                                      style={{ marginRight: "10px" }}
                                      type="radio"
                                      id="radio2"
                                      name="userType"
                                      value="Mrs"
                                    />
                                    <label className="form-check-label">
                                      Mrs
                                    </label>
                                  </div>
                                  <div
                                    style={{ margin: "30px" }}
                                    className="form-check"
                                  >
                                    <input
                                      {...register("userType", {
                                        required: true,
                                      })}
                                      style={{ marginRight: "10px" }}
                                      type="radio"
                                      id="radio3"
                                      name="userType"
                                      value="Mr"
                                    />
                                    <label className="form-check-label">
                                      Mr
                                    </label>
                                  </div>
                                  <div
                                    style={{ margin: "30px" }}
                                    className="form-check"
                                  >
                                    <input
                                      {...register("userType", {
                                        required: true,
                                      })}
                                      style={{ marginRight: "10px" }}
                                      type="radio"
                                      id="radio4"
                                      name="userType"
                                      value={custome}
                                      checked={customeStatus}
                                      onChange={handleStatusChanges}
                                    />
                                    Customize
                                    <input
                                      className="border-b border-indigo-600 "
                                      style={{
                                        width: "80px",
                                        marginLeft: "",
                                        marginTop: "-10px",
                                      }}
                                      onChange={handleTextChanges}
                                      type="text"
                                      id="usr"
                                      name="userType"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First Name
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("firstName", {
                                  required: true,
                                  pattern: /^[A-Za-z]+$/,
                                })}
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.firstName && (
                                <span style={{ color: "red" }}>
                                  This field is required and enter only text
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last Name
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("lastName", {
                                  required: true,
                                  pattern: /^[A-Za-z]+$/,
                                })}
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.lastName && (
                                <span style={{ color: "red" }}>
                                  This field is required and enter only text
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("city", {
                                  required: true,
                                })}
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.city && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="postalCode"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal Code
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("postalCode", {
                                  required: true,
                                  pattern: /^[0-9]+$/,
                                })}
                                type="text"
                                name="postalCode"
                                id="postalCode"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.postalCode && (
                                <span style={{ color: "red" }}>
                                  This field is required and enter only number
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <label
                              htmlFor="address1"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address 1
                            </label>
                            <div className="mt-1">
                              <textarea
                                {...register("address1", {
                                  required: true,
                                })}
                                rows={5}
                                name="address1"
                                id="address1"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.address1 && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <label
                              htmlFor="address2"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address 2
                            </label>
                            <div className="mt-1">
                              <textarea
                                {...register("address2", {
                                  required: true,
                                })}
                                rows={5}
                                name="address2"
                                id="address2"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.address2 && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12 pt-4 text-right">
                            <div>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  marginTop: "5rem",
                                  marginBottom: "2rem",
                                }}
                              >
                                <button type="submit">
                                  {" "}
                                  <div
                                    style={{
                                      cursor: "pointer",
                                      boxShadow:
                                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                                      width: "15rem",
                                      height: "5rem",
                                      backgroundColor: "black",
                                      color: "white",
                                      textAlign: "center",
                                      fontSize: "1.5rem",
                                      lineHeight: "5rem",
                                    }}
                                  >
                                    SAVE
                                  </div>
                                </button>
                                &nbsp;&nbsp;
                                <div
                                  style={{
                                    cursor: "pointer",
                                    boxShadow:
                                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                                    width: "15rem",
                                    height: "5rem",
                                    backgroundColor: "black",
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: "1.5rem",
                                    lineHeight: "5rem",
                                  }}
                                  onClick={handleBackPage}
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-12">
                    <div
                      style={{
                        marginTop: "6rem",
                        backgroundColor: "#F9f8f6",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <h2 className="pt-4">Add Billing Addresss</h2>
                      <form
                        className="grid grid-cols-1 gap-y-6"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div>
                              <div className="form-check">
                                <input
                                  className="border-dark border"
                                  style={{ marginRight: "10px" }}
                                  type="checkbox"
                                  id="isPrimaryAddress"
                                  name="isPrimaryAddress"
                                  onChange={handlePrimaryAddress}
                                  checked={isChecked}
                                />
                                <label>Save as your primary address</label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "100%",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                  }}
                                >
                                  <div
                                    style={{ margin: "30px" }}
                                    className="form-check"
                                  >
                                    <input
                                      {...register("userType", {
                                        required: true,
                                      })}
                                      style={{ marginRight: "10px" }}
                                      type="radio"
                                      id="radio1"
                                      name="userType"
                                      value="Ms"
                                      checked
                                    />
                                    <label className="form-check-label">
                                      Ms
                                    </label>
                                  </div>
                                  <div
                                    style={{ margin: "30px" }}
                                    className="form-check"
                                  >
                                    <input
                                      {...register("userType", {
                                        required: true,
                                      })}
                                      style={{ marginRight: "10px" }}
                                      type="radio"
                                      id="radio2"
                                      name="userType"
                                      value="Mrs"
                                    />
                                    <label className="form-check-label">
                                      Mrs
                                    </label>
                                  </div>
                                  <div
                                    style={{ margin: "30px" }}
                                    className="form-check"
                                  >
                                    <input
                                      {...register("userType", {
                                        required: true,
                                      })}
                                      style={{ marginRight: "10px" }}
                                      type="radio"
                                      id="radio3"
                                      name="userType"
                                      value="Mr"
                                    />
                                    <label className="form-check-label">
                                      Mr
                                    </label>
                                  </div>
                                  <div
                                    style={{ margin: "30px" }}
                                    className="form-check"
                                  >
                                    <input
                                      {...register("userType", {
                                        required: true,
                                      })}
                                      style={{ marginRight: "10px" }}
                                      type="radio"
                                      id="radio4"
                                      name="userType"
                                      value={custome}
                                      checked={customeStatus}
                                      onChange={handleStatusChanges}
                                    />
                                    Customize
                                    <input
                                      className="border-b border-indigo-600 "
                                      style={{
                                        width: "80px",
                                        marginLeft: "",
                                        marginTop: "-10px",
                                      }}
                                      onChange={handleTextChanges}
                                      type="text"
                                      id="usr"
                                      name="userType"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <label
                              htmlFor="firstName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              First Name
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("firstName", {
                                  required: true,
                                  pattern: /^[A-Za-z]+$/,
                                })}
                                type="text"
                                name="firstName"
                                id="firstName"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.firstName && (
                                <span style={{ color: "red" }}>
                                  This field is required and enter text only
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="lastName"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Last Name
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("lastName", {
                                  required: true,
                                  pattern: /^[A-Za-z]+$/,
                                })}
                                type="text"
                                name="lastName"
                                id="lastName"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.lastName && (
                                <span style={{ color: "red" }}>
                                  This field is required and enter text only
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="city"
                              className="block text-sm font-medium text-gray-700"
                            >
                              City
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("city", {
                                  required: true,
                                })}
                                type="text"
                                name="city"
                                id="city"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.city && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <label
                              htmlFor="postalCode"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Postal Code
                            </label>
                            <div className="mt-1">
                              <input
                                {...register("postalCode", {
                                  required: true,
                                  pattern: /^[0-9]+$/,
                                })}
                                type="text"
                                name="postalCode"
                                id="postalCode"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.postalCode && (
                                <span style={{ color: "red" }}>
                                  This field is required and enter only number
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <label
                              htmlFor="address1"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address 1
                            </label>
                            <div className="mt-1">
                              <textarea
                                {...register("address1", {
                                  required: true,
                                })}
                                rows={5}
                                name="address1"
                                id="address1"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.address1 && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <label
                              htmlFor="address2"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Address 2
                            </label>
                            <div className="mt-1">
                              <textarea
                                {...register("address2", {
                                  required: true,
                                })}
                                rows={5}
                                name="address2"
                                id="address2"
                                autoComplete="given-name"
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                              />
                              {errors.address2 && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="col-md-12 pt-4 text-right">
                            <div>
                              <div
                                style={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "center",
                                  marginTop: "5rem",
                                  marginBottom: "2rem",
                                }}
                              >
                                {" "}
                                <button type="submit">
                                  <div
                                    style={{
                                      cursor: "pointer",
                                      boxShadow:
                                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                                      width: "15rem",
                                      height: "5rem",
                                      backgroundColor: "black",
                                      color: "white",
                                      textAlign: "center",
                                      fontSize: "1.5rem",
                                      lineHeight: "5rem",
                                    }}
                                  >
                                    SAVE
                                  </div>
                                </button>
                                &nbsp;&nbsp;
                                <div
                                  style={{
                                    cursor: "pointer",
                                    boxShadow:
                                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                                    width: "15rem",
                                    height: "5rem",
                                    backgroundColor: "black",
                                    color: "white",
                                    textAlign: "center",
                                    fontSize: "1.5rem",
                                    lineHeight: "5rem",
                                  }}
                                  onClick={handleBackPage}
                                >
                                  Cancel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        {/* 总结 */}
        {step == 1 && (
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                width: "69%",
                backgroundColor: "#F9f8f6",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div style={{ width: "90%", fontSize: "1.4rem" }}>
                  <div style={{ fontSize: "1.4rem", marginTop: "3rem" }}>
                    Summary
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>Subtotal</div>
                    <div style={{ marginTop: "3rem" }}>${subTotal}</div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>Sales Tax</div>
                    <div style={{ marginTop: "3rem" }}>———</div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>Delivery</div>
                    <div style={{ marginTop: "3rem" }}>———</div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>3% Green Fee</div>
                    <div style={{ marginTop: "3rem" }}>———</div>
                  </div>{" "}
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem" }}>Tips for Deliverer</div>
                    <div style={{ marginTop: "3rem" }}>———</div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ marginTop: "3rem", fontSize: "2rem" }}>
                      Total
                      <span style={{ fontSize: "1.4rem", marginLeft: "5px" }}>
                        (Taxes and Delivery Fee excluded)
                      </span>
                    </div>
                    <div style={{ marginTop: "3rem", fontSize: "2rem" }}>
                      ${total}
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row-reverse",
                  marginTop: "5rem",
                  marginBottom: "2rem",
                }}
              >
                <button
                  style={{
                    margin: "20px",
                    marginRight: "40px",
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                    width: "18rem",
                    height: "5rem",
                    background:
                      "linear-gradient(to right , rgb(100,12,161),  rgb(244,157,94))",
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    lineHeight: "5rem",
                  }}
                  onClick={goToGroupOrder}
                >
                  Group Order
                </button>
                <button
                  onClick={handleShow}
                  style={{
                    margin: "20px",
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                    width: "18rem",
                    height: "5rem",
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    lineHeight: "5rem",
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        )}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-6 pt-4">
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Total Order Amount : {total}
              </label>
            </div>
            <div className="card mt-3">
              <div className="card-body">
                {clientSecret && stripePromise && (
                  <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm groupId={groupId} />
                  </Elements>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <HelpCenter></HelpCenter>
      </div>
    </>
  );
}

export default orderConfirm;

function AddressList({ address }: { address: any }) {
  return (
    <div
      style={{
        padding: "2rem",
        marginTop: "20px",
        width: "69%",
        backgroundColor: "#F9f8f6",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "90%", fontSize: "1.4rem" }}>
          <div style={{ fontSize: "1.4rem", marginTop: "3rem" }}>
            {address.firstName + " " + address.lastName}{" "}
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <div style={{ marginTop: "3rem", marginRight: "1rem" }}>Select</div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "50%",
                fontSize: "1.2rem",
                marginLeft: "3rem",
              }}
            >
              <div style={{}}>Primary Address: {address.address1}</div>
              <div style={{}}>Secondary Address :{address.address2}</div>
              <div style={{}}>City :{address.city}</div>
              <div style={{}}>{address.postalCode}</div>
            </div>

            <div style={{ marginTop: "1 rem", width: "100px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
                onClick={() => {}}
              >
                {/* {this.state.isChecked ? <svg style={{ cursor: 'pointer' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10303" width="24" height="24"><path d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-256a170.666667 170.666667 0 1 0 0-341.333334 170.666667 170.666667 0 0 0 0 341.333334z" p-id="10304" fill="#0080F9"></path></svg>
                : <svg style={{ cursor: 'pointer' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1647" width="24" height="24"><path d="M512 853.333333c-188.586667 0-341.333333-152.746667-341.333333-341.333333s152.746667-341.333333 341.333333-341.333333 341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333m0-768C276.48 85.333333 85.333333 276.48 85.333333 512s191.146667 426.666667 426.666667 426.666667 426.666667-191.146667 426.666667-426.666667S747.52 85.333333 512 85.333333z" fill="" p-id="1648"></path></svg>
              } */}
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  marginTop: "2rem",
                }}
              >
                <div
                  style={{
                    color: "rgb(23,119,177)",
                    textDecoration: "underline",
                  }}
                >
                  Edit{" "}
                </div>
                <div
                  style={{
                    marginLeft: "1rem",
                    color: "rgb(245,36,36)",
                    textDecoration: "underline",
                  }}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
