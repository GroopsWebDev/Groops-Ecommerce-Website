import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { LoadingSpinner } from "~/components/loading";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.productApi.getAllProducts.useQuery();

  const add_mutation = api.cartApi.addCartItem.useMutation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const add = (skuid: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    add_mutation.mutateAsync({ userId: userId ? userId : "dummy", skuid: skuid });
  }

  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>

      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-col place-items-center">
        {data?.map((product, index) => {
          const url = "https://api.gr-oops.com/" + product.image_url;
          if (index < 5) {
            return <div key={index} className="mt-10">
              <p>product name: {product.english_product_name}</p>
              <img
                src={url}
                className="w-20"
              />
              <button onClick={add(product.skuid ? product.skuid : "dummy")}
              className="mt-3 border border-blue-300">
                add to cart
              </button>
            </div>
          }

        })}
      </div>
    </>
  );
}