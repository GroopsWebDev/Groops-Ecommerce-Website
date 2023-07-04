import { useState } from "react";

const PaymentMethods: React.FC = () => {
  const [paymentList, setPaymentList] = useState([1]);

  return (
    <>
      {paymentList.map((p, index) => (
        <div
          key={index}
          className="mt-10 flex justify-between rounded-lg bg-white p-10 text-gray-800 shadow-lg"
        >
          <div className="flex gap-x-10">
            <img
              className="h-auto w-20"
              src="/assets/payment-methods/visa.png"
            />
            <div className="flex flex-col justify-center gap-y-3">
              <p>Ending with 1111</p>
              <p className="text-gray-400">Expires 1/20</p>
            </div>
          </div>

          <button className="rounded-xl border border-gray-300 px-5">
            Edit
          </button>
        </div>
      ))}

      <button
        onClick={() => setPaymentList([...paymentList, 1])}
        className="mt-10 text-rose-600"
      >
        Add a new address
      </button>
    </>
  );
};

export default PaymentMethods;
