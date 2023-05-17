import React from "react";
import Divider from "../shoppingCart/divider";

const MyOrders = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", marginLeft: "7rem", marginTop: "3rem" }}
          >
            <div style={{ color: "#707070" }}> Category:</div>
            <div style={{ color: "#0075BA" }}>All</div>
          </div>
          <div
            style={{ display: "flex", marginRight: "7rem", marginTop: "3rem" }}
          >
            <div style={{ color: "#707070" }}> Order Status:</div>
            <div style={{ color: "#0075BA" }}>All</div>
          </div>
        </div>

        {/* 选择订单框 */}
        <div
          className="rounded-3xl border"
          style={{
            marginTop: "2rem",
            width: "90%",
            border: "1px soild  black",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ margin: "30px", marginLeft: "40px", fontWeight: "600" }}
            >
              <span>Shipping in progress: 2022/05/22</span> <span>&nbsp;5</span>
            </div>
            <div style={{ margin: "30px", marginRight: "40px" }}>
              <span>$51.09</span>
            </div>
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>

          {/* 列表 */}
          <div style={{ width: "100%" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
              <li
                className="rounded-3xl border"
                style={{
                  cursor: "pointer",
                  boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                  width: "241px",
                  height: "150px",
                  backgroundColor: "#F5F5F5",
                  margin: "30px",
                }}
              ></li>{" "}
              <li
                className="rounded-3xl border"
                style={{
                  cursor: "pointer",
                  boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                  width: "241px",
                  height: "150px",
                  backgroundColor: "#F5F5F5",
                  margin: "30px",
                }}
              ></li>{" "}
              <li
                className="rounded-3xl border"
                style={{
                  cursor: "pointer",
                  boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                  width: "241px",
                  height: "150px",
                  backgroundColor: "#F5F5F5",
                  margin: "30px",
                }}
              ></li>{" "}
              <li
                className="rounded-3xl border"
                style={{
                  cursor: "pointer",
                  boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                  width: "241px",
                  height: "150px",
                  backgroundColor: "#F5F5F5",
                  margin: "30px",
                }}
              ></li>
            </ul>
          </div>
        </div>

        <div
          className="rounded-3xl border"
          style={{
            marginTop: "2rem",
            width: "90%",
            border: "1px soild  black",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ margin: "30px", marginLeft: "40px", fontWeight: "600" }}
            >
              <span>Delivered: 2022/04/30</span>
            </div>
            <div style={{ margin: "30px", marginRight: "40px" }}>
              <span>$318.20</span>
            </div>
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>

          {/* 列表 */}
          <div style={{ width: "100%" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
              <li
                className="rounded-3xl border"
                style={{
                  cursor: "pointer",
                  boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                  width: "241px",
                  height: "150px",
                  backgroundColor: "#F5F5F5",
                  margin: "30px",
                }}
              ></li>{" "}
              <li
                className="rounded-3xl border"
                style={{
                  cursor: "pointer",
                  boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                  width: "241px",
                  height: "150px",
                  backgroundColor: "#F5F5F5",
                  margin: "30px",
                }}
              ></li>{" "}
              <li
                className="rounded-3xl border"
                style={{
                  cursor: "pointer",
                  boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                  width: "241px",
                  height: "150px",
                  backgroundColor: "#F5F5F5",
                  margin: "30px",
                }}
              ></li>{" "}
              <li
                className="rounded-3xl border"
                style={{
                  cursor: "pointer",
                  boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                  width: "241px",
                  height: "150px",
                  backgroundColor: "#F5F5F5",
                  margin: "30px",
                }}
              ></li>
            </ul>
          </div>
        </div>

        <div
          className="rounded-3xl border"
          style={{
            marginTop: "2rem",
            width: "90%",
            border: "1px soild  black",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ margin: "30px", marginLeft: "40px", fontWeight: "600" }}
            >
              <span>Order details</span>
            </div>
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>

          {/* 列表 */}
          <div style={{ width: "100%" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
              <li style={{ width: "241px", height: "150px", margin: "30px" }}>
                <div style={{ margin: "10px" }}>Order date</div>
                <div style={{ margin: "10px" }}>2020/05/19</div>
              </li>
              <li style={{ width: "241px", height: "150px", margin: "30px" }}>
                <div style={{ margin: "10px" }}>Order date</div>
                <div style={{ margin: "10px" }}>2020/05/19</div>
                <div style={{ margin: "10px" }}>Order code</div>
                <div style={{ margin: "10px" }}>SLP057397391</div>
              </li>{" "}
              <li style={{ width: "241px", height: "150px", margin: "30px" }}>
                <div style={{ margin: "10px" }}>Status:</div>
                <div style={{ margin: "10px" }}>Delivered</div>
              </li>{" "}
              <li style={{ width: "241px", height: "150px", margin: "30px" }}>
                <div style={{ margin: "10px" }}>Shipping method:</div>
                <div style={{ margin: "10px" }}>Groops! Delivery</div>
                <div style={{ margin: "10px", color: "rgb(0,128,249)" }}>
                  Driver no. 23764
                </div>
              </li>
            </ul>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Divider></Divider>
            </div>

            <ul style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
              <li style={{ width: "526px", margin: "30px" }}>
                <div style={{ display: "flex" }}>
                  <div
                    className="rounded-3xl border cursor-pointer shadow-md w-316 h-203 bg-gray-200 my-30"
                  ></div>
                  <div style={{}}>
                    <div style={{ width: "150px", marginTop: "50px" }}>
                      <div style={{ color: "#0075ba", width: "" }}>
                        Product name
                      </div>
                      <div>$22.22 X 1</div>
                    </div>

                    <div
                      style={{
                        cursor: "pointer",
                        width: "117px",
                        height: "24px",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "24px",
                        fontSize: "12px",
                        marginTop: "5rem",
                      }}
                    >
                      Comment
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ width: "526px", margin: "30px" }}>
                <div style={{ display: "flex" }}>
                  <div
                    className="rounded-3xl border"
                    style={{
                      cursor: "pointer",
                      boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                      width: "316px",
                      height: "203px",
                      backgroundColor: "#F5F5F5",
                      margin: "30px",
                    }}
                  ></div>
                  <div style={{}}>
                    <div style={{ width: "150px", marginTop: "50px" }}>
                      <div style={{ color: "#0075ba", width: "" }}>
                        Product name
                      </div>
                      <div>$22.22 X 1</div>
                    </div>

                    <div
                      style={{
                        cursor: "pointer",
                        width: "117px",
                        height: "24px",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "24px",
                        fontSize: "12px",
                        marginTop: "5rem",
                      }}
                    >
                      Comment
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ width: "526px", margin: "30px" }}>
                <div style={{ display: "flex" }}>
                  <div
                    className="rounded-3xl border"
                    style={{
                      cursor: "pointer",
                      boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                      width: "316px",
                      height: "203px",
                      backgroundColor: "#F5F5F5",
                      margin: "30px",
                    }}
                  ></div>
                  <div style={{}}>
                    <div style={{ width: "150px", marginTop: "50px" }}>
                      <div style={{ color: "#0075ba", width: "" }}>
                        Product name
                      </div>
                      <div>$22.22 X 1</div>
                    </div>

                    <div
                      style={{
                        cursor: "pointer",
                        width: "117px",
                        height: "24px",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "24px",
                        fontSize: "12px",
                        marginTop: "5rem",
                      }}
                    >
                      Comment
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ width: "526px", margin: "30px" }}>
                <div style={{ display: "flex" }}>
                  <div
                    className="rounded-3xl border"
                    style={{
                      cursor: "pointer",
                      boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                      width: "316px",
                      height: "203px",
                      backgroundColor: "#F5F5F5",
                      margin: "30px",
                    }}
                  ></div>
                  <div style={{}}>
                    <div style={{ width: "150px", marginTop: "50px" }}>
                      <div style={{ color: "#0075ba", width: "" }}>
                        Product name
                      </div>
                      <div>$22.22 X 1</div>
                    </div>

                    <div
                      style={{
                        cursor: "pointer",
                        width: "117px",
                        height: "24px",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "24px",
                        fontSize: "12px",
                        marginTop: "5rem",
                      }}
                    >
                      Comment
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ width: "526px", margin: "30px" }}>
                <div style={{ display: "flex" }}>
                  <div
                    className="rounded-3xl border"
                    style={{
                      cursor: "pointer",
                      boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                      width: "316px",
                      height: "203px",
                      backgroundColor: "#F5F5F5",
                      margin: "30px",
                    }}
                  ></div>
                  <div style={{}}>
                    <div style={{ width: "150px", marginTop: "50px" }}>
                      <div style={{ color: "#0075ba", width: "" }}>
                        Product name
                      </div>
                      <div>$22.22 X 1</div>
                    </div>

                    <div
                      style={{
                        cursor: "pointer",
                        width: "117px",
                        height: "24px",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "24px",
                        fontSize: "12px",
                        marginTop: "5rem",
                      }}
                    >
                      Comment
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ width: "526px", margin: "30px" }}>
                <div style={{ display: "flex" }}>
                  <div
                    className="rounded-3xl border"
                    style={{
                      cursor: "pointer",
                      boxShadow: " 0px 2px 2px 0px rgba(0,0,0,0.1)",
                      width: "316px",
                      height: "203px",
                      backgroundColor: "#F5F5F5",
                      margin: "30px",
                    }}
                  ></div>
                  <div style={{}}>
                    <div style={{ width: "150px", marginTop: "50px" }}>
                      <div style={{ color: "#0075ba", width: "" }}>
                        Product name
                      </div>
                      <div>$22.22 X 1</div>
                    </div>

                    <div
                      style={{
                        cursor: "pointer",
                        width: "117px",
                        height: "24px",
                        backgroundColor: "black",
                        color: "white",
                        textAlign: "center",
                        lineHeight: "24px",
                        fontSize: "12px",
                        marginTop: "5rem",
                      }}
                    >
                      Comment
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>
          {/* 地址 */}
          <div style={{ width: "100%", display: "flex", marginBottom: "30px" }}>
            <div
              style={{ width: "45%", marginLeft: "80px", marginTop: "20px" }}
            >
              <div style={{ marginBottom: "30px" }}>Shipping address:</div>
              <div>Mr. Yves Saint Laurent</div>
              <div>318-01 Rue St-Jacques O Montréal QC, CANADA</div>
              <div>H3C 3Z7</div>
              <div>+1 999-999-9999</div>
            </div>

            <div
              style={{ width: "45%", marginLeft: "80px", marginTop: "20px" }}
            >
              <div style={{ marginBottom: "30px" }}>Billing address:</div>
              <div>Mr. Yves Saint Laurent</div>
              <div>318-01 Rue St-Jacques O Montréal QC, CANADA</div>
              <div>H3C 3Z7</div>
              <div>+1 999-999-9999</div>
            </div>
          </div>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>

          {/* {结算} */}

          <div style={{ width: "100%", fontSize: "20px", height: "345px" }}>
            <div style={{ width: "50%", float: "right" }}>
              <div style={{ width: "100%", margin: "20px", display: "flex" }}>
                <div style={{ width: "25%" }}>All items:</div>
                <div style={{ width: "60%", direction: "rtl" }}>$999.9</div>
              </div>
              <div style={{ width: "100%", margin: "20px", display: "flex" }}>
                <div style={{ width: "25%" }}>Shipping:</div>
                <div style={{ width: "60%", direction: "rtl" }}>$1.9</div>
              </div>
              <div style={{ width: "100%", margin: "20px", display: "flex" }}>
                <div style={{ width: "25%" }}>Tax:</div>
                <div style={{ width: "60%", direction: "rtl" }}>$999.9</div>
              </div>
              <div style={{ width: "100%", margin: "20px", display: "flex" }}>
                <div style={{ width: "26%" }}>Group Discount:</div>
                <div style={{ width: "59%", direction: "rtl" }}>12%</div>
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "20px",
                  display: "flex",
                  fontWeight: "500",
                  fontSize: "30px",
                }}
              >
                <div style={{ width: "25%" }}>Total:</div>
                <div style={{ width: "60%", direction: "rtl" }}>$999.9</div>
              </div>
            </div>
          </div>

          {/* 按钮 */}
          <div style={{ width: "100%" }}>
            <div
              style={{ width: "30%", float: "right", marginRight: "6   0px" }}
            >
              <div
                style={{
                  cursor: "pointer",
                  margin: "20px",
                  width: "244px",
                  height: "55px",
                  textAlign: "center",
                  lineHeight: "55px",
                  color: "white",
                  background:
                    "linear-gradient(to right , rgb(100,12,161),  rgb(244,157,94))",
                }}
              >
                Add Tips
              </div>
              <div
                style={{
                  cursor: "pointer",
                  margin: "20px",
                  width: "244px",
                  height: "55px",
                  textAlign: "center",
                  lineHeight: "55px",
                  background: "black",
                  color: "white",
                }}
              >
                Download invoice
              </div>
              <div
                style={{
                  cursor: "pointer",
                  margin: "20px",
                  width: "244px",
                  height: "55px",
                  textAlign: "center",
                  lineHeight: "55px",
                  color: "#0075BA",
                }}
              >
                Need help?
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default MyOrders;
