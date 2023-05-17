import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.orderapi.getUserOrders.useQuery({
    userId: userId ? userId : "1",
  });


  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>
      
      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-col place-items-center">
        {data?.map((order) => (
          <div key={order.orderId}>Love list item id: {order.orderId}</div>
        ))}
      </div>
    </>
  );
}