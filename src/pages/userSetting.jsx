import { useState } from 'react';
import React, { useEffect } from "react";
import Head from 'next/head';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from "next/router";
import * as yup from "yup";



const schema = yup.object().shape({
  username: yup.string().required("username field is required").matches(/^[A-Za-z]+[A-Za-z ]*$/, "Username must be alphabet characters.")
    .min(2, "Needs at least 2 Character")
    .max(100, "Please enter a username less than 100 character"),

  phoneNumber: yup.number("phone number field is required").positive().integer("phone number is a integer value").required("phone number field is required"),
  postCode: yup.number("post code type a number").required("post code field is required"),
  // address : yup.min(2, "Needs at least 2 Character")
  // .max(255,"Please enter a address less than 255 character"),

});

// const schema = Yup.object().shape({
//   username: Yup
//   .string()
//   .matches(/^[A-Za-z]+[A-Za-z ]*$/, "Username must be alphabet characters.")
//   .min(2, "Needs at least 2 Character")
//   .max(100,"Please enter a username less than 100 character")
//   .required('Username is required'),
//   phonenumber: Yup

//   // .positive("Please enter the positive")
//   .required('Phone number is required'),
//   postCode: Yup
//   .integer()
//   .positive("Please enter the positive")
//   .required('Post code is required'),
//    paymentMethod: Yup
//    .string()
//     .matches(/^\S*$/, 'Whitespace is not allowed')
//     .matches(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
//       "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character"
//     )
//     .required("Password is Mendatory")
//     .min(8, "Password must be at 8 char long")
//     .max(32),

// });


const userSetting = () => {
  const router = useRouter();
  // const [data, setData] = useState<any>([]);



  // const [user, setUser] = useState({
  //   username: '',
  //   phoneNumber: '',
  //   address: '',
  //   postCode: '',
  //   paymentMethod: '',
  //   password: '',
  //   oldPassword: '',
  //   newPassword: '',
  //   confirmPassword: '',
  //   profilePicture: '',
  // });



  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  
  const inputStyle = {
    padding: '5px 10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
  };



  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser((prevState) => ({ ...prevState, [name]: value }));
  // };

  const bucketName = "img";


  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0].name;
    minioClient.putObject(
      bucketName,
      file.file,
      file.buffer,
      function (err, url) {
        if (err) {
          return console.log(err);
        }
        console.log("============", err);
        console.log("============", url);
      }
    );
    setUser({ ...user, profilePicture: URL.createObjectURL(e.target.files[0]) });
    console.log(e.target.files[0])

  };

  

  async function  onSubmit(dataget){
    // setLoading(true);
 
    const result = await fetch("/api/user/userSetting", {
        method: "POST",
        body: JSON.stringify(dataget),   
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result == 200) {
        router.push("/product/cart-details");
         
      } else {
        // Error occurred while creating user
        // setLoading(false);
      } 
    

  }


  
  // useEffect(() => {
  //   async function fetchData() {
      
  //     const response = await fetch('api/user/userSetting/get');
  //     const json = await response.json();
  //     setData(json);
       
  //   }

  //   fetchData();
  // }, []);

  // console.log(data)


    

  // const updatedUser = {
  //   username: 'new username',
  //   phoneNumber: 'new phone number',
  //   address: 'new address',
  //   postCode: 'new post code',
  //   paymentMethod: 'new payment method',
  //   password: 'new password',
  //   oldPassword: '',
  //   newPassword: '',
  //   confirmPassword: '',
  //   profilePicture: '',
  // };

  return (
    <>
      <div>
        <Head>
          <title>User Settings | My App</title>
        </Head>
        <div className="max-w-6xl border-1 shadow-lg rounded-md p-6 mx-auto mt-10 mb-12 flex">


          <div className="w-1/2 pr-8 mx-6">
            <div style={{ marginLeft: "200px", marginTop: "150px" }} >
              <div className="w-32 h-32 rounded-full overflow-hidden mr-4 shadow-sm">
                <img src={user.profilePicture} alt="" className="w-full h-full object-cover" />
              </div>

            </div>
            <div style={{ marginLeft: "200px" }} >
              <label className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline" >
                Choose Image
                <input type="file" className="hidden" name="profilePicture" onChange={handleProfilePictureChange} />
              </label>
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-6">User Settings</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                  Username
                </label>

                <Controller
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  control={control}
                  name="username"
                  defaultValue=""
                  render={({ field }) => <input {...field} type="text" id="username" name="username" style={inputStyle} />}
                />
                {errors.username && (
                  <span style={{ color: 'red' }}>{errors.username['message']}</span>
                )}

                
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <Controller
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  control={control}
                  name="phoneNumber"
                  defaultValue=""
                  render={({ field }) => <input {...field} type="text" id="phoneNumber" name="phoneNumber" style={inputStyle} />}
                />
                
                {errors.phoneNumber && (
                  <span style={{ color: 'red' }}>{errors.phoneNumber['message']}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <Controller
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  control={control}
                  name="address"
                  defaultValue=""
                  render={({ field }) => <input {...field} type="text" id="address" name="address" style={inputStyle} />}
                />
                
                {errors.address && (
                  <span style={{ color: 'red' }}>{errors.address['message']}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="postCode">
                  Post Code
                </label>
                <Controller
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  control={control}
                  name="postCode"
                  defaultValue=""
                  render={({ field }) => <input {...field} type="text" id="postCode" name="postCode" style={inputStyle} />}
                />
               
                {errors.postCode && (
                  <span style={{ color: 'red' }}>{errors.postCode['message']}</span>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="paymentType">
                  Payment Method
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="paymentType"
                  name="paymentType"
                //  value={user.paymentType}
                >
                  {/* <option value="">-- Select Payment Method --</option> */}
                  <option value="paypal">Paypal</option>
                  <option value="debit-card">Visa</option>

                </select>

              </div>

              {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePasswordChange}
              >
                Change Password
              </button> */}

              <button
                type="submit"
                 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline">
                Submit
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default userSetting;