import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const router = useRouter();
  const productId = router.query.id;
  const { data, isLoading, refetch } = api.productApi.getById.useQuery({
    skuid: productId,
  });
  const imagePath = "https://api.gr-oops.com/";
  //console.log(data);
  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>
      
      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-col place-items-center">
          <div><img src={imagePath + data?.image} style={{ height: "150px", width: "250px" }} /></div>
          <div>Product Name : {data?.englishProductName}</div>
          <div>Price : {data?.price}</div>
          <div>Place Of Origin: {data?.placeOfOrigin}</div>
          <div>Description : {data?.description}</div>
          <div>Alcohol : {data?.alcohol ? "Yes" : "No"}</div>
          <div>Product Weight : {data?.productWeight}</div>
      </div>
    </>
  );
}