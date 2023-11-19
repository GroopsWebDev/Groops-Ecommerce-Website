const PersonalInfo: React.FC = () => {
  return (
    <>
      <div className="rounded-lg bg-white p-10 text-gray-800 shadow-lg">
        <div className="flex items-center gap-x-3">
          <img
            className="w-[10%] rounded-full"
            src="/assets/dummy/product.png"
          />
          <button className="rounded-xl border border-gray-300 p-2">
            Change
          </button>
        </div>

        <p className="ml-1 mt-10">Username</p>
        <input
          className="mt-1 w-1/2 rounded-lg border border-gray-300 p-2"
          placeholder="Username"
          id="username"
          type="name"
          required
        />

        <div className="mt-10 flex gap-x-3">
          <div className="w-1/2">
            <p>First Name</p>
            <input
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 "
              placeholder="First Name"
              id="first_name"
              required
            />
          </div>
          <div className="w-1/2">
            <p>Last Name</p>
            <input
              className="mt-1 w-full rounded-lg border border-gray-300 p-2"
              placeholder="Last Name"
              id="last_name"
              required
            />
          </div>
        </div>

        <div className="mt-10 flex gap-x-3">
          <div className="w-1/2">
            <p>Email Address</p>
            <input
              className="mt-1 w-full rounded-lg border border-gray-300 p-2"
              placeholder="Email address"
              id="email"
              type="email"
              required
            />
          </div>
          <div className="w-1/2">
            <p>Phone number</p>
            <input
              className="mt-1 w-full rounded-lg border border-gray-300 p-2"
              placeholder="Phone number"
              id="phone"
              type="tel"
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-x-3 text-gray-800">
        <button className="rounded-xl border border-gray-300 bg-white p-3">
          Cancel
        </button>
        <button className="rounded-xl border bg-primary-main p-3 text-white">
          Save
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
