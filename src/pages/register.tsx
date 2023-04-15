import React from "react";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import ExitPopupButton from "../components/tailwind-buttons/exit-pop-up-btn";
import { ScrollView } from "react-native";

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
  const [agreeToTerms, setAgreeToTerms] = React.useState(false);

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

  const showTermsConditions = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="rounded-md border-2 border-black bg-white">
            <div className="m-4">
              <h1 className="text-center">Terms of Service</h1>
              <p>This group ends in 2 days This group ends in 2 days This group ends in 2 days This group ends in 2 days</p>
              <p>This group has in 5 members | 10% discount earned</p>
              <p>Next step to to proceed your checkout </p>
              <p>
                (The discount refund will be sent back to your mayment account
                in 3 days after this group ends.
              </p>
              <p>
                {" "}
                You can also view your group discount refund history in your
                user center.)
              </p>

              <div className="flex justify-center">
                <ExitPopupButton
                  onClick={() => {
                    setAgreeToTerms(true);
                    onClose();
                  }}
                  text="Agree"
                  className="mr-4"
                />
              </div>
            </div>
          </div>
        );
      },
    });
  };

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
                checked={agreeToTerms}
                onClick={() => {
                  setAgreeToTerms(!agreeToTerms);
                }}
              />
            )}
          />
          I agree with Groop's{" "}
          <a
            onClick={showTermsConditions}
            className="cursor-pointer text-blue-600"
          >
            Terms and Conditions
          </a>
          .
        </label>

        <button type="submit" style={buttonStyle}>
          {loading ? <CircularProgress style={{ color: "white" }} /> : "Join"}
        </button>
      </form>
    </div>
  );
};

export default Register;
