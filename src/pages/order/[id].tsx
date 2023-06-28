import { useRouter } from "next/router";

const Order: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="bg-gray-100 p-5">
      <h2 className="text-xl ">Order #{id}</h2>
      <p className="text-gray-400">Total 9 items</p>

      <div className="mt-10 flex gap-x-5">
        <div className="Left w-[70%] rounded bg-white p-5">
          Left
          <div className="flex gap-x-10 text-gray-400">
            <p>status</p>
            <p>order placed</p>
            <p>estimated delivery time</p>
          </div>
          <div className="flex gap-x-10">
            <p>In progress</p>
            <p>May 21 2023</p>
            <p>May 22 2023</p>
          </div>
          <div className="mt-5 flex gap-x-10 text-gray-400">
            <p>delivery method</p>
            <p>tracking number</p>
          </div>
          <div className="flex gap-x-10">
            <p>standard shipping</p>
            <p>111111111</p>
          </div>
          <div className="mt-5 flex gap-x-10 text-gray-400">
            <p>payment method</p>
          </div>
          <div className="flex gap-x-10">
            <p>visa 4300 **** 123</p>
          </div>
          <div className="mt-5 flex gap-x-10 text-gray-400">
            <p>delivery address</p>
          </div>
          <div className="">
            <p>Eddy Luo</p>
            <p>234 College Street, ON, M2N 1J9</p>
            <p>+1 222 333 4444</p>
          </div>
        </div>

        <div className="Right w-[30%] rounded bg-white p-5">Right</div>
      </div>
    </div>
  );
};

export default Order;
