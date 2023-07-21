import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { LoadingSpinner } from "~/components/others/loading";

export default function Test() {
  const { data: addressData, isLoading } =
  api.address.getAllAddresses.useQuery();

  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>

      {isLoading ? (
        <LoadingSpinner />
    ):(
      addressData?.map((address) => (
        <div key={address.id}>
          <h1>address id: {address.id}</h1>
          <h1>{address.street}</h1>
         <h1>{address.city}</h1>
         <h1>{address.state}</h1>
        </div>
      ))
    )}
    </>
  );
}