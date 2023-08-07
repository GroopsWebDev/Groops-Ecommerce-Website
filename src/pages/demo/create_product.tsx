import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.lovelistApi.getUserLoveList.useQuery({
    userId: userId ? userId : "1",
  });

//   const add_mutation = api.lovelistApi.addLoveListItem.useMutation();
  const delete_all_mutation = api.lovelistApi.deleteAllLoveListItems.useMutation();

  const create_product_min = api.productApi.createProduct_min.useMutation();

  const create = async () => {
    // await create_product_min.mutateAsync({ userId: userId ? userId : "1", skuid: "1" });

    await create_product_min.mutateAsync({ 
        englishProductName: "english_product_name",
        product_weight: "weight",
        primary_image_url: "image url",
       });
    // await refetch(); // Trigger a refetch of the user's love list


  };

  // const deleteAllLovedItems = async () => {
    
  // }



  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>
      
      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-row justify-center">
        <button onClick={create} className="m-20 border">
          Create product
        </button>
        {/* <button onClick={deleteAllLovedItems} className="m-20 border">
          Empty lovelist
        </button> */}
      </div>


    </>
  );
}

