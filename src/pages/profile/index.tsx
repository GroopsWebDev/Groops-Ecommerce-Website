import { useState } from "react";
import Head from "next/head";
// import minioClient  from "../../server/miiniClient" ;

const userSetting = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    username: "",
    phoneNumber: "",
    address: "",
    postCode: "",
    paymentMethod: "",
    password: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    profilePicture: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const bucketName = "img";

  const handleProfilePictureChange = (e: any) => {
    const file = e.target.files[0].name;
    // minioClient.putObject(
    //   bucketName,
    //   file.file,
    //   file.buffer,
    //   function (err: any, url: any) {
    //     if (err) {
    //       return console.log(err);
    //     }
    //   }
    // );
    setUser({
      ...user,
      profilePicture: URL.createObjectURL(e.target.files[0]),
    });
    console.log(e.target.files[0]);
  };

  const submitButton = () => {
    alert("User update successfully");
    setIsSubmitted(true);
  };

  const handlePasswordChange = () => {};

  const updatedUser = {
    username: "new username",
    phoneNumber: "new phone number",
    address: "new address",
    postCode: "new post code",
    paymentMethod: "new payment method",
    password: "new password",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    profilePicture: "",
  };

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
                  src={user.profilePicture}
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
            <form onSubmit={handlePasswordChange}>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                  id="username"
                  name="username"
                  type="text"
                  value={isSubmitted ? updatedUser.username : user.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="phoneNumber"
                >
                  Phone Number
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={user.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                  id="address"
                  name="address"
                  value={user.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="postCode"
                >
                  Post Code
                </label>
                <input
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                  id="postCode"
                  name="postCode"
                  type="text"
                  value={user.postCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="mb-2 block font-bold text-gray-700"
                  htmlFor="paymentMethod"
                >
                  Payment Method
                </label>
                <select
                  className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={user.paymentMethod}
                  onChange={handleInputChange}
                >
                  <option value="">-- Select Payment Method --</option>
                  <option value="paypal">Paypal</option>
                  <option value="debit-card">Visa</option>
                </select>
              </div>

              <button
                className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                onClick={handlePasswordChange}
              >
                Change Password
              </button>

              <button
                type="submit"
                onClick={submitButton}
                className="focus:shadow-outline mx-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default userSetting;
