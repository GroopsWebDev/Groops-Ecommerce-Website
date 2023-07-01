const ChangePassword: React.FC = () => {
  return (
    <>
      <div className="mt-10 rounded-lg bg-white p-10 text-gray-800 shadow-lg">
        <p>New password</p>

        <input
          className="mt-1 w-2/3 rounded-lg border border-gray-300 p-2"
          placeholder="Password"
          required
          type="password"
          id={"password1"}
        />

        <p className="mt-5">Confirm new password</p>
        <input
          className="mt-1 w-2/3 rounded-lg border border-gray-300 p-2"
          placeholder="Password"
          type="password"
          required
          id={"password2"}
        />
      </div>
    </>
  );
};

export default ChangePassword;
