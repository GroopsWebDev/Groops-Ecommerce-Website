import { useState } from "react";

const DeliveryAddress: React.FC = () => {
  const [addressList, setAddressList] = useState([1]);

  return (
    <>
      {addressList.map((address, index) => (
        <div
          key={index}
          className="mt-10 rounded-lg bg-white p-10 text-gray-800 shadow-lg"
        >
          <h2>Address {index + 1}</h2>
          <div className="mt-5 flex gap-x-3">
            <div className="w-1/2">
              <p>First Name</p>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 "
                placeholder="First Name"
                id={"address" + index + "first_name"}
                required
              />
            </div>
            <div className="w-1/2">
              <p>Last Name</p>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                placeholder="Last Name"
                required
                id={"address" + index + "last_name"}
              />
            </div>
          </div>

          <div className="mt-5 flex gap-x-3">
            <div className="w-1/2">
              <p>Email</p>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 "
                placeholder="Email"
                id={"address" + index + "email"}
                required
              />
            </div>
            <div className="w-1/2">
              <p>Country</p>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                placeholder="Country"
                required
                id={"address" + index + "country"}
              />
            </div>
          </div>

          <p className="mt-5">Street Address</p>
          <input
            className=" w-full rounded-lg border border-gray-300 p-2"
            placeholder="Street Address"
            required
            id={"address" + index + "street"}
          />

          <div className="mt-5 flex gap-x-3">
            <div className="w-1/3">
              <p>City</p>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 "
                placeholder="City"
                id={"address" + index + "city"}
                required
              />
            </div>
            <div className="w-1/3">
              <p>State/Province</p>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                placeholder="State"
                required
                id={"address" + index + "state"}
              />
            </div>
            <div className="w-1/3">
              <p>ZIP/Postal</p>
              <input
                className="mt-1 w-full rounded-lg border border-gray-300 p-2"
                placeholder="Postal"
                required
                id={"address" + index + "psotcode"}
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-3 text-gray-800">
            <button className="rounded-xl border border-gray-300 bg-white p-3">
              Cancel
            </button>
            <button className="rounded-xl border bg-rose-600 p-3 text-white">
              Save
            </button>
          </div>
        </div>
      ))}

      <div>
        <button
          onClick={() => setAddressList([...addressList, 1])}
          className="mt-10 text-rose-600"
        >
          Add a new address
        </button>
      </div>
    </>
  );
};

export default DeliveryAddress;
