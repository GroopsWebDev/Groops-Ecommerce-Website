import { useState } from 'react';
import Head from 'next/head';
import { minioClient } from '../../helper';

const userSetting = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user, setUser] = useState({
    username: '',
    phoneNumber: '',
    address: '',
    postCode: '',
    paymentMethod: '',
    password: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    profilePicture: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const bucketName = "img";


  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0].name;
    minioClient.putObject(
      bucketName,
      file. file,
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

  const handlePasswordChange = () => {
    window.open("/ChangePassword");
  }

  const submitButton = () => {
    alert("User update successfully");
    setIsSubmitted(true);
  }

  const updatedUser = {
    username: 'new username',
    phoneNumber: 'new phone number',
    address: 'new address',
    postCode: 'new post code',
    paymentMethod: 'new payment method',
    password: 'new password',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    profilePicture: '',
  };


  return (
    <>
    <div>
      <Head>
        <title>User Settings | My App</title>
      </Head>
      <div className="max-w-6xl border-1 shadow-lg rounded-md p-6 mx-auto mt-10 mb-12 flex">

      
        <div className="w-1/2 pr-8 mx-6">
          <div style={{marginLeft:"200px", marginTop:"150px"}} >
            <div className="w-32 h-32 rounded-full overflow-hidden mr-4 shadow-sm">
              <img src={user.profilePicture} alt="" className="w-full h-full object-cover" />
            </div>
            
          </div>
          <div style={{marginLeft:"200px"}} >
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded focus:outline-none focus:shadow-outline" >
             Choose Image
              <input type="file" className="hidden" name="profilePicture" onChange={handleProfilePictureChange} />
            </label>
        </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-bold mb-6">User Settings</h1>
          <form onSubmit={handlePasswordChange}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                value={isSubmitted ? updatedUser.username : user.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={user.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                Address
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                name="address"
                value={user.address}
                onChange={handleInputChange}
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="postCode">
                Post Code
                </label>
                <input
                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                             id="postCode"
                             name="postCode"
                             type="text"
                             value={user.postCode}
                             onChange={handleInputChange}
                           />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="paymentMethod">
                Payment Method
                </label>
                <select
                             className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handlePasswordChange}
              >
                Change Password
              </button>
                
                <button
                type="submit"
                onClick={submitButton}
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