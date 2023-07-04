import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { LoadingSpinner } from "~/components/others/loading";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.cartApi.getUserCartList.useQuery({
    userId: userId ? userId : "1",
  });

  const delete_all_mutation = api.cartApi.deleteAllInCart.useMutation();

  const deleteAllLovedItems = async () => {
    await delete_all_mutation.mutateAsync({ userId: userId ? userId : "1" });
    await refetch(); // Trigger a refetch of the user's love list
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>

      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-row justify-center">
        <button onClick={deleteAllLovedItems} className="m-20 border">
          Empty cart
        </button>
      </div>

      <div className="flex flex-col place-items-center">
        {data?.map((item) => (
          <div key={item.id}>
            <p>Love list item: {item.skuid}, quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
}