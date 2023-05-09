import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function Test() {

  const { data: sessionData } = useSession();
  const [items, setItems] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  const fetch = async () => {
    const response: any = await axios.post("/api/love-list/get-by-user",
      { userId: String(sessionData?.user?.id) });

    if (response.data.status == 200) {
      setItems(response.data.items);
    }
  }

  const create = () => {
    axios.post("/api/love-list/create",
      {
        skuid: "1",
        userId: String(sessionData?.user?.id)
      }
    );
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = items.map(async (item: any) => {
        const response = await axios.get("/api/product/getById?id=" + item.skuid);
        return response.data.status == 200 ? response.data.product : null;
      })

      const products = await Promise.all(result);
      setProducts(products);
      console.log(products);
    }
    fetchData();
  }, [items]);


  return <>
    <h1 className="text-center text-purple-600 mt-20 mb-20">Groops API testing page</h1>

    <h1 className="text-center">user ID : {sessionData?.user ? sessionData.user.id : -1}</h1>

    <div className="flex flex-row justify-center">
      <button onClick={create} className="border m-20">create entry in lovelist</button>
      <button onClick={fetch} className="border m-20">fetch lovelist</button>
    </div>


    {products.map((product: any, index: number) => {

      return <div key={index} className="mt-10">
        <h1>item name : {product?.englishProductName}</h1>
        <h1>item id : {product?.skuid}</h1>
      </div>
    })}


  </>
}