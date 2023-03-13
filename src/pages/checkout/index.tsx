import { blue } from "@mui/material/colors";
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
  password: Yup.string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
    )
    .required("Password is Mendatory")
    .min(8, "Password must be at 8 char long")
    .max(32),
  confirmPassword: Yup.string()
    .required("Password is Mendatory")
    .oneOf([Yup.ref("password")], "Password does not match"),
  terms: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

function orderConfirm() {
  const imagePath = "https://api.gr-oops.com/";
  const [cartItem, setCartItem] = useState<any>([]);
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripePromise = loadStripe(
    "pk_test_51MCWFKI3CTiTs4JqLIbwXO682cGFbfqKkbAQJjfFfkSvGcwjA0GDZvgZkGlFPFTG7ve6CvBRh0IhQtU1Hp9q8Y5I00pmlT9A2M"
  );
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/cart/getcart");
      const data = await response.json();
      setCartItem(data);
    }
    fetchData();
  }, []);

  async function createSecret() {
    const response = await fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({ items: cartItem }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data) {
      setClientSecret(data.clientSecret);
    }
  }

  useEffect(() => {
    const sub_total = cartItem.reduce(
      (acc: any, item: any) => acc + item.product.price * item.qty,
      0
    );
    setSubTotal(sub_total);
    setTotal(sub_total);
    createSecret();
  }, [cartItem]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: any) {
    try {
      const result = await axios.post("/api/user/register", data);

      if (result.data.status == 200) {
        router.push("/login");
      } else {
        alert("Registeration failed.");
      }
    } catch (e) {
      console.log(e);
      alert("something went wrong.");
    }
  }

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  async function goToGroupOrder() {
    router.push("/group/list");
  }

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
                    Mrs.xxxxx{" "}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <div style={{ marginTop: "3rem", marginRight: "1rem" }}>
                      Select
                    </div>
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
                        width: "30%",
                        fontSize: "1.2rem",
                        marginLeft: "3rem",
                      }}
                    >
                      <div style={{}}>KJDHKJHF Ave</div>
                      <div style={{}}>Montréal QC, CANADA </div>
                      <div style={{}}>H3C 1A1</div>
                      <div style={{}}> +1 999-999-9999</div>
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
                <button
                  onClick={() => setStep(1)}
                  style={{
                    cursor: "pointer",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    width: "15rem",
                    height: "5rem",
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "1.5rem",
                    lineHeight: "5rem",
                  }}
                >
                  NEXT
                </button>
              </div>
            </div>
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
                {" "}
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
            <div
              style={{
                marginTop: "16rem",
                backgroundColor: "white",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "60%", fontSize: "1.3rem" }}>
                <div style={{ display: "flex", width: "100%" }}>
                  <div>Shipping Address</div>

                  <div>
                    <div className="form-check">
                      <input
                        className="border-dark border"
                        style={{ marginRight: "10px" }}
                        type="checkbox"
                        id="check1"
                        name="option1"
                        value="something"
                        checked
                      />
                      <label>Save as your primary address</label>
                    </div>
                  </div>
                </div>

                {/* 按钮 */}
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
                    <div style={{ margin: "30px" }} className="form-check">
                      <input
                        style={{ marginRight: "10px" }}
                        type="radio"
                        id="radio4"
                        name="optradio"
                        value="option2"
                        checked
                      />
                      <label className="form-check-label">Ms</label>
                    </div>
                    <div style={{ margin: "30px" }} className="form-check">
                      <input
                        style={{ marginRight: "10px" }}
                        type="radio"
                        id="radio3"
                        name="optradio"
                        value="option2"
                      />
                      <label className="form-check-label">Mrs</label>
                    </div>
                    <div style={{ margin: "30px" }} className="form-check">
                      <input
                        style={{ marginRight: "10px" }}
                        type="radio"
                        value="option1"
                      />
                      <label className="form-check-label">Mr</label>
                    </div>
                    <div style={{ margin: "30px" }} className="form-check">
                      <input
                        style={{ marginRight: "10px" }}
                        type="radio"
                        value="option1"
                      />
                      Customize
                      <input
                        className="border-b border-indigo-600"
                        style={{
                          width: "80px",
                          marginLeft: "",
                          marginTop: "-10px",
                        }}
                        type="text"
                        id="usr"
                        name="username"
                      />
                    </div>
                  </div>
                </div>

                {/*  输入 */}
                <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <div style={{ display: "flex", width: "50%" }}>
                        <div style={{ width: "100%", padding: "1.5rem" }}>
                          <textarea
                            style={{ fontSize: "1.4rem", height: "8rem" }}
                            placeholder=" First  Name*"
                            className="form-control border-dark border"
                            id="comment"
                            name="text"
                          ></textarea>
                        </div>
                      </div>
                      <div style={{ display: "flex", width: "50%" }}>
                        <div style={{ width: "100%", padding: "1.5rem" }}>
                          <textarea
                            style={{ fontSize: "1.4rem", height: "8rem" }}
                            placeholder=" Last  Name*"
                            className="form-control border-dark border"
                            id="comment"
                            name="text"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <div style={{ width: "100%", padding: "1.5rem" }}>
                        <textarea
                          style={{ fontSize: "1.4rem", height: "8rem" }}
                          placeholder=" Adress  1*"
                          className="form-control border-dark border"
                          id="comment"
                          name="text"
                        ></textarea>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <div style={{ width: "100%", padding: "1.5rem" }}>
                        <textarea
                          style={{ fontSize: "1.4rem", height: "8rem" }}
                          placeholder=" Adress  2"
                          className="form-control border-dark border"
                          id="comment"
                          name="text"
                        ></textarea>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        marginBottom: "1.2rem",
                      }}
                    >
                      <div style={{ display: "flex", width: "50%" }}>
                        <div style={{ width: "100%", padding: "1.5rem" }}>
                          <textarea
                            style={{
                              fontSize: "1.4rem",
                              height: "8rem",
                              border: "1px soid #blue !important",
                            }}
                            placeholder="  Postal  Code*"
                            className="form-control border-dark border"
                            id="comment"
                            name="text"
                          ></textarea>
                        </div>
                      </div>

                      <div style={{ display: "flex", width: "50%" }}>
                        <div
                          style={{
                            width: "100%",
                            padding: "1.5rem",
                            paddingLeft: "0",
                          }}
                        >
                          <textarea
                            style={{ fontSize: "1.4rem", height: "8rem" }}
                            placeholder=" City*"
                            className="form-control border-dark border"
                            id="comment"
                            name="text"
                          ></textarea>
                        </div>
                      </div>
                    </div>
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
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/*Billing 输入 */}

            <div
              style={{
                marginTop: "16rem",
                marginBottom: "16rem",
                backgroundColor: "white",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ width: "60%", fontSize: "1.3rem" }}>
                <div style={{ display: "flex", width: "100%" }}>
                  <div>Shipping Address</div>

                  <div>
                    <div className="form-check">
                      <input
                        className="border-dark border"
                        style={{ marginRight: "10px" }}
                        type="checkbox"
                        id="check1"
                        name="option1"
                        value="something"
                        checked
                      />
                      <label>Save as your primary address</label>
                    </div>
                  </div>
                </div>

                {/* 按钮 */}
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
                    <div style={{ margin: "30px" }} className="form-check">
                      <input
                        style={{ marginRight: "10px" }}
                        type="radio"
                        id="radio1"
                        name="optradio"
                        value="option1"
                        checked
                      />
                      <label className="form-check-label">Ms</label>
                    </div>
                    <div style={{ margin: "30px" }} className="form-check">
                      <input
                        style={{ marginRight: "10px" }}
                        type="radio"
                        id="radio2"
                        name="optradio"
                        value="option1"
                      />
                      <label className="form-check-label">Mrs</label>
                    </div>
                    <div style={{ margin: "30px" }} className="form-check">
                      <input
                        style={{ marginRight: "10px" }}
                        type="radio"
                        value="option1"
                      />
                      <label className="form-check-label">Mr</label>
                    </div>
                    <div style={{ margin: "30px" }} className="form-check">
                      <input
                        style={{ marginRight: "10px" }}
                        type="radio"
                        value="option1"
                      />
                      Customize
                      <input
                        className="border-b border-indigo-600 "
                        style={{
                          width: "80px",
                          marginLeft: "",
                          marginTop: "-10px",
                        }}
                        type="text"
                        id="usr"
                        name="username"
                      />
                    </div>
                  </div>
                </div>

                {/*  输入 */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <div style={{ display: "flex", width: "50%" }}>
                      <div style={{ width: "100%", padding: "1.5rem" }}>
                        <textarea
                          style={{ fontSize: "1.4rem", height: "8rem" }}
                          placeholder=" First  Name*"
                          className="form-control border-dark border"
                          id="comment"
                          name="text"
                        ></textarea>
                      </div>
                    </div>
                    <div style={{ display: "flex", width: "50%" }}>
                      <div style={{ width: "100%", padding: "1.5rem" }}>
                        <textarea
                          style={{ fontSize: "1.4rem", height: "8rem" }}
                          placeholder=" Last  Name*"
                          className="form-control border-dark border"
                          id="comment"
                          name="text"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <div style={{ width: "100%", padding: "1.5rem" }}>
                      <textarea
                        style={{ fontSize: "1.4rem", height: "8rem" }}
                        placeholder=" Adress  1*"
                        className="form-control border-dark border"
                        id="comment"
                        name="text"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <div style={{ width: "100%", padding: "1.5rem" }}>
                      <textarea
                        style={{ fontSize: "1.4rem", height: "8rem" }}
                        placeholder=" Adress  2"
                        className="form-control border-dark border"
                        id="comment"
                        name="text"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "1.2rem",
                    }}
                  >
                    <div style={{ display: "flex", width: "50%" }}>
                      <div style={{ width: "100%", padding: "1.5rem" }}>
                        <textarea
                          style={{
                            fontSize: "1.4rem",
                            height: "8rem",
                            border: "1px soid #blue !important",
                          }}
                          placeholder=" Postal  Code*"
                          className="form-control border-dark border"
                          id="comment"
                          name="text"
                        ></textarea>
                      </div>
                    </div>
                    <div style={{ display: "flex", width: "50%" }}>
                      <div
                        style={{
                          width: "100%",
                          padding: "1.5rem",
                          paddingLeft: "0",
                        }}
                      >
                        <textarea
                          style={{ fontSize: "1.4rem", height: "8rem" }}
                          placeholder=" City*"
                          className="form-control border-dark border"
                          id="comment"
                          name="text"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div
                  onClick={() => {}}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "5rem",
                    marginBottom: "2rem",
                  }}
                >
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
                </div>
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
                  <button
                    onClick={() => setStep(1)}
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
                    Next
                  </button>
                </div>
              </div>
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
                {clientSecret && (
                  <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
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
