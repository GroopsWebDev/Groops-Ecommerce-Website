import { api } from "~/utils/api";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useState, useEffect } from "react";


export default function Test() {

  
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { data, isLoading, refetch } = api.lovelist.getUserLoveList.useQuery(
    { userId: userId? userId : "1" }
  );
  const [items, setItems] = useState<any>([]);

  const mutation = api.lovelist.addLoveListItem.useMutation();

  const create = async () => {
    await mutation.mutateAsync({userId : userId? userId : "1", skuid: "1"})
  }

  const fetch = async () => {
    await refetch();
  };

  useEffect(() => {
    if (!isLoading && data) {
      setItems(data);
    }
  }, [isLoading, data]);


  return <>
    <h1 className="text-center mt-10 mb-10">My user Id : {userId}</h1>

    <div className="flex flex-row justify-center">
      <button onClick={create} className="border m-20">create entry in lovelist</button>
      <button onClick={fetch} className="border m-20">fetch lovelist</button>
    </div>

    <div className="flex flex-col place-items-center">
      {items?.map((item : any, index : number) => {
        return <p key={index}>love list item id : {item.skuid} </p>
      })}
    </div>
  </>
}