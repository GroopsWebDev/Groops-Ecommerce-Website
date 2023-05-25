import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.productApi.getAllProducts.useQuery();
  console.log(data);
  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>
      
      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-col place-items-center">
        {data?.map((product) => (
          <div  key={product.skuid} className="flex m-5 font-sans">
          <div >product name: {product.englishProductName}</div>
          <div >product cost: {product.costPrice}</div>
          <div >product description: {product.description}</div>
        </div>

        ))}
      </div>
    </>
  );
}