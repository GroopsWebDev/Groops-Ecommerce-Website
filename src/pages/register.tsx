import React from "react";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import axios from "axios";

type IUser = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: string;
};

const schema = Yup.object().shape({
  fullname: Yup.string()
    .matches(/^[A-Za-z]+[A-Za-z ]*$/, "full name must be alphabet characters.")
    .min(2, "Needs at least 2 Character")
    .max(100, "Please enter a fullname less than 100 character")
    .required("First name is required"),
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

const Register = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    resolver: yupResolver(schema),
  });

  
  const formStyle = {
    display: "flex",
    flexDirection: "column" as const,
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
  };

  const labelStyle = {
    marginBottom: "5px",
  };

  const inputStyle = {
    padding: "5px 10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundImage: "linear-gradient(to right, #9b59b6,#e74c3c 50%, #f39c12)",
    color: "#fff",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "50px",
  };
  const checkboxStyle = {
    marginRight: "5px",
  };

  async function onSubmit(data: any) {
    try {
      setLoading(true);
      const result = await axios.post("/api/user/register", data);
      if (result.data.status == 200) {
        router.push("/login");
        setLoading(false);
      } else {
        // Error occurred while creating user
        setLoading(false);
        alert("Registeration failed.");
      }
    } catch (e) {
      setLoading(false);
      alert("something went wrong.");
    }
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Join to unlock the best of Groops!
      </h1>
      <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1" }}>
            <label htmlFor="fullname" style={labelStyle}>
              Full Name
            </label>
            <Controller
              control={control}
              name="fullname"
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="fullname"
                  name="fullname"
                  style={inputStyle}
                />
              )}
            />
            {errors.fullname && (
              <span style={{ color: "red" }}>{errors.fullname["message"]}</span>
            )}
          </div>

          {/* <div style={{ flex: "1", marginLeft: "10px" }}>
            <label htmlFor="lastname" style={labelStyle}>
              Last Name
            </label>
            <Controller
              control={control}
              name="lastname"
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  id="lastname"
                  name="lastname"
                  style={inputStyle}
                />
              )}
            />
            {errors.lastname && (
              <span style={{ color: "red" }}>{errors.lastname["message"]}</span>
            )}
          </div> */}
        </div>

        <label htmlFor="email" style={labelStyle}>
          Email Address
        </label>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="email"
              id="email"
              name="email"
              style={inputStyle}
            />
          )}
        />
        {errors.email && (
          <span style={{ color: "red" }}>{errors.email["message"]}</span>
        )}

        <label htmlFor="password" style={labelStyle}>
          Password
        </label>
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="password"
              id="password"
              name="password"
              style={inputStyle}
            />
          )}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors?.password["message"]}</span>
        )}

        <label htmlFor="confirmPassword" style={labelStyle}>
          Confirm Password
        </label>
        <Controller
          control={control}
          name="confirmPassword"
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              style={inputStyle}
            />
          )}
        />
        {errors.confirmPassword && (
          <span style={{ color: "red" }}>
            {errors.confirmPassword["message"]}
          </span>
        )}

        <label style={labelStyle}>
          <Controller
            control={control}
            name="terms"
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="checkbox"
                name="terms"
                style={checkboxStyle}
              />
            )}
          />
          I agree with Groops Terms and Conditions.
        </label>

        <button type="submit" style={buttonStyle}>
          {loading ? <CircularProgress style={{ color: "white" }} /> : "Join"}
        </button>
      </form>
    </div>
  );
};

export default Register;
