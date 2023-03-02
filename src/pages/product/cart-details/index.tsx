import React, { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRef } from "react";

function CartDetails() {
  const myRef: any = useRef(null);
  // const { data: sessionData } = useSession();
  const [data, setData] = useState<any>([]);
  const imagePath = "https://api.gr-oops.com/";
  const apiUrl = "http://localhost:3000/api/";
  const webUrl = "http://localhost:3000/";
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(apiUrl + "product/get/cartdata");
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, [value]);

  async function IncreaseQty(cartId: any) {
    const value = myRef?.current?.value ? myRef.current.value : 1;
    if (value == 0) {
      const postData = {
        cartId: cartId,
      };
      const res = await fetch(apiUrl + "product/delete", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      if (data) {
        window.location.reload();
        //    setValue(true)
      }
    } else {
      const sednData = {
        cartId: cartId,
        qty: value,
      };
      const res = await fetch(apiUrl + "product/cart-quantity", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sednData),
      });
      const data = await res.json();
      if (data == 200) {
        console.log("d");
        //  window.location.reload();
      }
    }
  }

  return (
    <>
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-2xl font-bold">Cart Details</h1>

        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Product Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((item: any) => (
              <tr>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">
                    <img src={imagePath + item["product"].image} />
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {item["product"].englishProductName}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm text-gray-900">
                    {item["product"].price}
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="text-sm text-gray-900">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      defaultValue={item.qty}
                      ref={myRef}
                      onChange={() => IncreaseQty(item.id)}
                      className="h-10 w-16 appearance-none rounded border border-gray-400 py-2 px-3 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <a
          href={webUrl + "/checkout"}
          className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
        >
          Checkout
        </a>
      </div>

      <br />
      <br />
    </>
  );
}

export default CartDetails;
