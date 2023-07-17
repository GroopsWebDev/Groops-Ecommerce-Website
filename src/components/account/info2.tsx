import { LoadingSpinner } from "~/components/others/loading";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const PersonalInfo: React.FC = () => {
  const { user } = useUser();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setUserName(value);

    const specialCharRegex = /^[a-zA-Z0-9_]+$/;
    const isValid = value === "" || specialCharRegex.test(value);
    setIsUserNameValid(isValid);
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFirstName(value);

    const alphabeticRegex = /^[A-Za-z]+$/;
    const isValid = value === "" || alphabeticRegex.test(value);
    setIsFirstNameValid(isValid);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLastName(value);

    const alphabeticRegex = /^[A-Za-z]+$/;
    const isValid = value === "" || alphabeticRegex.test(value);
    setIsLastNameValid(isValid);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = value === "" || emailRegex.test(value);
    setIsEmailValid(isValid);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const updateProfile = async () => {
    if (
      !isUserNameValid ||
      !isFirstNameValid ||
      !isLastNameValid ||
      !isEmailValid ||
      !user
    ) {
      return null;
    } else {
      if (selectedImage) {
        try {
          setIsLoading(true);
          await user.setProfileImage({
            file: selectedImage,
          });
          console.log("Profile image updated successfully!");
          await user.reload();
          setIsLoading(false);
        } catch (error) {
          console.error("Error updating profile image:", error);
        }
      }
      if (userName) {
        try {
          setIsLoading(true);
          console.log(user.id, userName);
          await user.update({
            username: "test",
          });
          console.log("User Name updated successfully!");
          await user.reload();
          setIsLoading(false);
        } catch (error) {
          console.error("Error updating User Name:", error);
        }
      }
      if (firstName) {
        try {
          setIsLoading(true);
          console.log(user.id, firstName, typeof(firstName));
          await user.update({
            firstName: firstName,
          });
          console.log("First Name updated successfully!");
          await user.reload();
          setIsLoading(false);
        } catch (error) {
          console.error("Error updating First Name:", error);
        }
      }
      if (lastName) {
        try {
          setIsLoading(true);
          await user.update({
            lastName: String(lastName),
          });
          console.log("Last Name updated successfully!");
          await user.reload();
          setIsLoading(false);
        } catch (error) {
          console.error("Error updating Last Name:", error);
        }
      }
      if (email) {
        try {
          setIsLoading(true);
          await user.update({
            primaryEmailAddressId: String(email),
          });
          console.log("Email updated successfully!");
          await user.reload();
          setIsLoading(false);
        } catch (error) {
          console.error("Error updating Email:", error);
        }
      }
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="rounded-lg bg-white p-10 text-gray-800 shadow-lg">
        <div className="col-span-full">
          <label
            htmlFor="photo"
            className="block font-medium leading-6 text-gray-900"
          >
            Photo
          </label>
          <div className="ml-0 mt-2 flex items-center gap-x-3">
            {selectedImage ? (
              <img
                className="h-12 w-12 rounded-full"
                src={URL.createObjectURL(selectedImage)}
                alt=""
              />
            ) : user!.profileImageUrl ? (
              <Image
                className="h-12 w-12 rounded-full"
                src={user!.profileImageUrl}
                alt=""
                width={100}
                height={100}
              />
            ) : (
              <UserCircleIcon
                className="h-20 w-20 p-0 text-gray-300"
                aria-hidden="true"
              />
            )}
            <input
              type="file"
              id="photo"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label
              htmlFor="photo"
              className="font-ight cursor-pointer rounded-md bg-white px-2.5 py-1.5 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Change
            </label>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block font-medium leading-6 text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  value={userName}
                  onChange={handleUserNameChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                {!isUserNameValid && (
                  <p className="mt-1 text-sm text-red-600">
                    Special characters are not allowed.
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  pattern="[A-Za-z]+"
                  autoComplete="given-name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                {!isFirstNameValid && (
                  <p className="mt-1 text-sm text-red-600">
                    Please enter alphabetic characters only.
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  pattern="[A-Za-z]+"
                  value={lastName}
                  onChange={handleLastNameChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                {!isLastNameValid && (
                  <p className="mt-1 text-sm text-red-600">
                    Please enter alphabetic characters only.
                  </p>
                )}
              </div>
            </div>

            {/* Email address */}
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                {!isEmailValid && (
                  <p className="mt-1 text-sm text-red-600">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-4">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm"
                  >
                    <option className="focus:outline-none">US</option>
                    <option>CA</option>
                  </select>
                </div>
                <input
                  type="number"
                  name="phone-number"
                  id="phone-number"
                  className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-rose-600 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="+1 (555) 987-6543"
                />
              </div>
            </div>
            {/* Phone Number react-phone-number-input*/}
            <div className="sm:col-span-4">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="RU"
                value={phone}
                onChange={() => {
                  setPhone;
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-x-3 text-gray-800">
        <button className="rounded-xl border border-gray-300 bg-white p-3">
          Cancel
        </button>
        <button
          onClick={updateProfile}
          className="rounded-xl border bg-rose-600 p-3 text-white"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
