const Index = () => {
  const Entry = () => (
    <tr className="border-b-[1px]">
      <td className="px-10 py-2">
        <p>Commission earned</p>
        <p className="text-gray-400">group name</p>
      </td>
      <td className="px-10 py-2 text-gray-400">14/SEP/2023</td>
      <td className="my-2 px-10">
        <p className="rounded-full bg-green-100 px-1 text-green-500">Earned</p>
        <p>+ $120</p>
      </td>
      <td className="px-10 py-2">
        <p>240</p>
        <p className="text-gray-400">CAD</p>
      </td>
      <td className="px-10 py-2">
        <p className="rounded-full bg-blue-100 px-1 text-blue-500">
          processing
        </p>
      </td>
    </tr>
  );

  return (
    <div className="bg-gray-200 p-5">
      <h1 className="text-2xl font-bold">Your wallet</h1>
      <div className="mt-5 bg-white px-10 py-36">
        <div className="flex items-center justify-center gap-x-20">
          {/* <div className="relative w-1/3">
            <p className="absolute right-1/2 top-1/2 text-white">C$ 100</p>
            <img src="/assets/wallet/wallet_card.png" className="w-full p-10" />
          </div> */}

          <div className="flex h-64 w-1/3 flex-col items-center justify-center rounded-xl bg-gradient-to-r from-purple-900 to-orange-400">
            <p className="text-xl font-bold text-white">C$ 100</p>
            <p className="text-white">Earned commissions</p>
          </div>

          <div className="flex flex-col items-center gap-y-5">
            <p>you can withdraw your earned commissions through Paypal</p>
            <button className="rounded bg-primary-main px-5 py-2 text-white">
              withdraw through paypal
            </button>
          </div>
        </div>

        <table className="mx-auto mt-20 text-center">
          <thead>
            <tr>
              <th className="px-10 py-5 text-gray-400">DESCRIPTION</th>
              <th className="px-10 py-5 text-gray-400">DATE</th>
              <th className="px-10 py-5 text-gray-400">PAYMENT TYPE</th>
              <th className="px-10 py-5 text-gray-400">BALANCE</th>
              <th className="px-10 py-5 text-gray-400">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <Entry />
            <Entry />
            <Entry />
            <Entry />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
