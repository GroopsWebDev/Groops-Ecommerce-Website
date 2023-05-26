import { api } from "~/utils/api";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { LoadingSpinner } from "~/components/loading";
import { useState } from "react";

export default function Test() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.groupApi.getAllGroups.useQuery();

  const create_group = api.groupApi.createGroup.useMutation();
  const delete_group = api.groupApi.deleteGroup.useMutation();

  const [groupId, setGroupId] = useState('group id')
  const deleteGroup = async () => {
    await delete_group.mutateAsync({ groupId: groupId ? groupId : "1"});
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
        <br></br>
        <br></br>
      <Link href="/demo/createGroup" className="bg-black p-1 text-white">
        Go To Create Group Page
      </Link>
      
      <h1 className="mb-10 mt-10 text-center">My user Id: {userId}</h1>

      <div className="flex flex-col place-items-center">
        {data?.map((group) => (
          <div key={group.groupName}>group name: {group.groupName}, || group id: {group.groupId} 
          </div>
          
        ))}
      </div>
    
    <div className="flex flex-col place-items-center">
    <br /> Group Id:
    <input  
       
        value = {groupId}
        onChange={(e) => setGroupId(e.target.value)} 
        placeholder="G1 id"
        />

    <button 
      type="submit"
      className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={() => deleteGroup()}
    >
        Button: Delete Group</button>
    </div>
    </>
  );
}