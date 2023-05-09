import React, { useState } from "react";
import Divider from "../shoppingCart/divider";
import { useSession } from "next-auth/react";
import axios from "axios";

const myProfile = () => {

  const [isLoading, setIsLoading] = useState(false);
  const { data: sessionData } = useSession();

  const changePassword = async ({ current, newpass }: { current: any, newpass: any }) => {

    setIsLoading(true);

    const response = await axios.post("/api/user/changePassword",
      {
        id: sessionData?.user?.email,
        currentPassword: current,
        newPassword: newpass
      });

    setIsLoading(false);
    if (response.data.status != 200) {
      alert(response.data.message);
    }
  }

  const changeProfile = async ({ name, image, address, postCode, phone }: {
    name: String, image: String, address: String, postCode: String, phone: String
  }) => {
    setIsLoading(true);
    const response = await axios.post("/api/user/update",
      {
        name: name,
        image: image,
        address: address,
        postCode: postCode,
        phone: phone,
      });

    if (response.data.status != 200) {
      alert(response.data.message);
    }
  }

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
        {/* 表单 */}

        <div
          className="rounded-3xl border"
          style={{
            marginTop: "5rem",
            padding: "10px",
            width: "80%",
            border: "1px soild  black",
          }}
        >
          <div style={{ width: "100%", padding: "20px" }}>
            Personal Information
          </div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>

          <div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio2"
                      name="optradio"
                      value="option2"
                      defaultChecked
                    />
                    <label htmlFor="radio2" className="form-check-label">
                      Ms
                    </label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio3"
                      name="optradio"
                      value="option2"
                    />
                    <label className="form-check-label">Mrs</label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio4"
                      name="optradio"
                      value="option2"
                    />
                    <label className="form-check-label">Mr</label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio5"
                      name="optradio"
                      value="option2"
                    />
                    Customize
                    <input
                      className="border-b border-black "
                      style={{
                        width: "120px",
                        marginLeft: "10px",
                        marginTop: "-10px",
                      }}
                      type="text"
                      id="usr"
                      name="username"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div style={{ width: "100%", padding: "1.5rem" }}>
                      <textarea
                        style={{
                          fontSize: "1.4rem",
                          height: "5rem",
                          borderRadius: "0px",
                        }}
                        placeholder="First  Name*"
                        className="form-control border-dark rounded-none  border"
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
                        style={{
                          fontSize: "1.4rem",
                          height: "5rem",
                          borderRadius: "0px",
                        }}
                        placeholder=" Last  Name*"
                        className="form-control border-dark border"
                        id="comment"
                        name="text"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      {" "}
                      <div
                        style={{
                          cursor: "pointer",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                          width: "20rem",
                          height: "4rem",
                          backgroundColor: "black",
                          color: "white",
                          textAlign: "center",
                          fontSize: "1.4rem",
                          lineHeight: "4rem",
                        }}
                      >
                        SAVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-3xl border"
          style={{
            marginTop: "5rem",
            padding: "10px",
            width: "80%",
            border: "1px soild  black",
          }}
        >
          <div style={{ width: "100%", padding: "20px" }}>My Eamil</div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>

          <div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio2"
                      name="optradio"
                      value="option2"
                      defaultChecked
                    />
                    <label htmlFor="radio2" className="form-check-label">
                      Ms
                    </label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio3"
                      name="optradio"
                      value="option2"
                    />
                    <label className="form-check-label">Mrs</label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio4"
                      name="optradio"
                      value="option2"
                    />
                    <label className="form-check-label">Mr</label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio5"
                      name="optradio"
                      value="option2"
                    />
                    Customize
                    <input
                      className="border-b border-indigo-600 border-black "
                      style={{
                        width: "120px",
                        marginLeft: "10px",
                        marginTop: "-10px",
                      }}
                      type="text"
                      id="usr"
                      name="username"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div style={{ width: "100%", padding: "1.5rem" }}>
                      <textarea
                        style={{
                          fontSize: "1.4rem",
                          height: "5rem",
                          borderRadius: "0px",
                        }}
                        placeholder=" Eamil*"
                        className="form-control border-dark rounded-none  border"
                        id="comment"
                        name="text"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      {" "}
                      <div
                        style={{
                          cursor: "pointer",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                          width: "20rem",
                          height: "4rem",
                          backgroundColor: "black",
                          color: "white",
                          textAlign: "center",
                          fontSize: "1.4rem",
                          lineHeight: "4rem",
                        }}
                      >
                        SAVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-3xl border"
          style={{
            marginTop: "5rem",
            padding: "10px",
            width: "80%",
            border: "1px soild  black",
          }}
        >
          <div style={{ width: "100%", padding: "20px" }}>My phone number</div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>

          <div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio2"
                      name="optradio"
                      value="option2"
                      defaultChecked
                    />
                    <label htmlFor="radio2" className="form-check-label">
                      Ms
                    </label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio3"
                      name="optradio"
                      value="option2"
                    />
                    <label className="form-check-label">Mrs</label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio4"
                      name="optradio"
                      value="option2"
                    />
                    <label className="form-check-label">Mr</label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio5"
                      name="optradio"
                      value="option2"
                    />
                    Customize
                    <input
                      className="border-b border-indigo-600 border-black "
                      style={{
                        width: "120px",
                        marginLeft: "10px",
                        marginTop: "-10px",
                      }}
                      type="text"
                      id="usr"
                      name="username"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        padding: "1.5rem",
                        position: "relative",
                      }}
                    >
                      <textarea
                        style={{
                          fontSize: "1.4rem",
                          height: "5rem",
                          borderRadius: "0px",
                        }}
                        placeholder="Phone number*"
                        className="form-control border-dark rounded-none  border"
                        id="comment"
                        name="text"
                      ></textarea>
                      <div
                        style={{
                          position: "absolute",
                          right: "30px",
                          bottom: "50px",
                          cursor: "pointer",
                          color: "#0075BA",
                        }}
                      >
                        Send code
                      </div>{" "}
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
                        style={{
                          fontSize: "1.4rem",
                          height: "5rem",
                          borderRadius: "0px",
                        }}
                        placeholder="Confirmation code*"
                        className="form-control border-dark border"
                        id="comment"
                        name="text"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      {" "}
                      <div
                        style={{
                          cursor: "pointer",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                          width: "20rem",
                          height: "4rem",
                          backgroundColor: "black",
                          color: "white",
                          textAlign: "center",
                          fontSize: "1.4rem",
                          lineHeight: "4rem",
                        }}
                      >
                        SAVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="rounded-3xl border"
          style={{
            marginTop: "5rem",
            padding: "10px",
            width: "80%",
            border: "1px soild  black",
          }}
        >
          <div style={{ width: "100%", padding: "20px" }}>My password</div>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Divider></Divider>
          </div>

          <div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio2"
                      name="optradio"
                      value="option2"
                      defaultChecked
                    />
                    <label htmlFor="radio2" className="form-check-label">
                      Ms
                    </label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio3"
                      name="optradio"
                      value="option2"
                    />
                    <label className="form-check-label">Mrs</label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio4"
                      name="optradio"
                      value="option2"
                    />
                    <label className="form-check-label">Mr</label>
                  </div>
                  <div style={{ margin: "5px" }} className="form-check">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      id="radio5"
                      name="optradio"
                      value="option2"
                    />
                    Customize
                    <input
                      className="border-b border-indigo-600 border-black "
                      style={{
                        width: "120px",
                        marginLeft: "10px",
                        marginTop: "-10px",
                      }}
                      type="text"
                      id="usr"
                      name="username"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div style={{ width: "60%" }}>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <div style={{ width: "100%", padding: "1.5rem" }}>
                      <textarea
                        style={{
                          fontSize: "1.4rem",
                          height: "5rem",
                          borderRadius: "0px",
                        }}
                        placeholder="Old passwor*"
                        className="form-control border-dark rounded-none  border"
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
                        style={{
                          fontSize: "1.4rem",
                          height: "5rem",
                          borderRadius: "0px",
                        }}
                        placeholder=" New password*"
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
                        style={{
                          fontSize: "1.4rem",
                          height: "5rem",
                          borderRadius: "0px",
                        }}
                        placeholder="Repeat*"
                        className="form-control border-dark border"
                        id="comment"
                        name="text"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                        marginBottom: "2rem",
                      }}
                    >
                      {" "}
                      <div
                        style={{
                          cursor: "pointer",
                          boxShadow:
                            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
                          width: "20rem",
                          height: "4rem",
                          backgroundColor: "black",
                          color: "white",
                          textAlign: "center",
                          fontSize: "1.4rem",
                          lineHeight: "4rem",
                        }}
                      >
                        SAVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "200px" }}></div>
      </div>
    </>
  );
};

export default myProfile;
