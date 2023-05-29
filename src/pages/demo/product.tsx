import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { LoadingSpinner } from "~/components/loading";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.productApi.getAllProducts.useQuery();

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
        {data?.map((product) => (
          <Link
            href={`/demo/productDetail?id=${product.skuid}`}
            style={{ paddingBottom: "9px" }}
          >
            <div key={product.skuid}>
              product name: {product.englishProductName}{" "}
              <button
                className="btn btn-primary"
                style={{
                  border: "1px solid blue",
                  padding: "7px",
                  background: "blue",
                  color: "white",
                }}
              >
                View Detail
              </button>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
