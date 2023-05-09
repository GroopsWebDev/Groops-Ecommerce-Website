import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Test() {

  const [items, setItems] = useState<any>([]);

  const fetch = async () => {
    const response: any = await axios.post("/api/love-list/get-by-user", { userId: "1" })
    if (response.data.status == 200) {
      setItems(response.data.items);
    }
  }

  const create = () => {
    axios.post("/api/love-list/create", { skuid: "1", userId: "1" })
  }

  return <>
    <button onClick={create} className="border mt-20">create</button>

    <button onClick={fetch} className="border mt-20">fetch</button>

    {items.map((item: any, index: number) => {
      return <div key={index} className="mt-20">
        <h1>item id : {item.skuid}</h1>
        <p>user id : {item.userId}</p>
      </div>
    })}

  </>
}