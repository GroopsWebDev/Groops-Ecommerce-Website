const PersonalInfo: React.FC = () => {
  return (
    <div className="rounded-xl bg-white p-5 text-gray-800">
      <div className="flex items-center gap-x-3">
        <img className="w-[10%] rounded-full" src="/assets/dummy/product.png" />
        <button className="rounded-xl border border-gray-300 p-2">
          Change
        </button>
      </div>

      <p className="ml-1 mt-10">Username</p>
      <input
        className="w-1/2 rounded-lg border border-gray-300 p-2 text-lg mt-1"
        placeholder="Username"
      />
    </div>
  );
};

const Account: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-200 py-5">
      <div className="flex w-[20%] flex-col items-center">
        <h1 className="text-2xl font-bold">Your Account</h1>

        <img
          className="mt-10 w-1/2 rounded-full"
          src="/assets/dummy/product.png"
        />

        <h2 className="mt-5 text-xl">Name</h2>

        <p className="mt-5 text-sm text-gray-600">example@email.com</p>
        <p className=" text-sm text-gray-600">+1 833 222 2222</p>

        <p className="mt-10 text-gray-600">personal information</p>
        <p className="mt-3 text-gray-600">Delivery Address</p>
        <p className="mt-3 text-gray-600">Payment Methods</p>
        <p className="mt-3 text-gray-600">Change Password</p>
      </div>

      <div className=" h-full w-[1px] bg-gray-300"></div>

      <div className="w-[80%] overflow-auto p-36">
        <PersonalInfo />
      </div>
    </div>
  );
};

export default Account;
