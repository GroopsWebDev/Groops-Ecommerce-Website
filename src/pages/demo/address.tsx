import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { LoadingSpinner } from "~/components/others/loading";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.addressApi.getUserAddress.useQuery({
    user_id_Clerk: userId ? userId : 1,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>

      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-col place-items-center">
        {data?.map((item) => (
          <div key={item.id}>
            <p>first name: {item.firstName}, city: {item.city}</p>
          </div>
        ))}
      </div>
    </>
  );
}