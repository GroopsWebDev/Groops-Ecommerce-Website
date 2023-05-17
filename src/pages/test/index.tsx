import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.lovelist.getUserLoveList.useQuery({
    userId: userId ? userId : "1",
  });

  const add_mutation = api.lovelist.addLoveListItem.useMutation();
  const delete_all_mutation = api.lovelist.deleteAllLoveListItems.useMutation();

  const create = async () => {
    await add_mutation.mutateAsync({ userId: userId ? userId : "1", skuid: "1" });
    await refetch(); // Trigger a refetch of the user's love list
  };

  const deleteAllLovedItems = async () => {
    await delete_all_mutation.mutateAsync();
    await refetch(); // Trigger a refetch of the user's love list
  }

  return (
    <>
      <Link href="/" className="bg-black p-1 text-white">
        Back to home page
      </Link>
      
      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-row justify-center">
        <button onClick={create} className="m-20 border">
          Create entry in lovelist
        </button>
        <button onClick={deleteAllLovedItems} className="m-20 border">
          Empty lovelist
        </button>
      </div>

      <div className="flex flex-col place-items-center">
        {data?.map((loved_item) => (
          <div key={loved_item.id}>Love list item id: {loved_item.skuid}</div>
        ))}
      </div>
    </>
  );
}