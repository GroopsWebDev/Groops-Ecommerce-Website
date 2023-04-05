import React, { useEffect } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { Spinner } from "react-bootstrap";
import { useRouter } from "next/router";

function CartDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const myRef: any = useRef(null);
  const { data: sessionData } = useSession();
  const [data, setData] = useState<any>([]);
  const imagePath = "https://api.gr-oops.com/";
  const apiUrl = "http://localhost:3000/api/";
  const webUrl = "http://localhost:3000/";
  const [value, setValue] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(apiUrl + "product/get/cartdata");
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    }
    fetchData();
  }, [value]);

  async function IncreaseQty(e: any, cartId: any) {
    const value = e.target.value;

    if (value <= 0) {
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
      if (data.status === 200) {
        setValue(true);
      } else {
        alert("something went wrong");
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
      if (data.status == 200) {
      }
    }
  }

  const redirectToCheckOut = () => {
    if (sessionData) {
      router.push("/checkout");
    } else {
      alert("login required");
    }
  };

  return (
    <>
      <br />
      <br />
      {isLoading ? (
        <Spinner style={{ marginLeft: "700px" }} />
      ) : (
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <h1 className="mb-6 text-2xl font-bold">Cart Details</h1>
          {data.length > 0 ? (
            <>
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
                    <tr key={item.id}>
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
                            onChange={(e) => IncreaseQty(e, item.id)}
                            className="h-10 w-16 appearance-none rounded border border-gray-400 py-2 px-3 leading-tight text-gray-700 focus:border-blue-500 focus:outline-none"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <a
                onClick={redirectToCheckOut}
                className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
              >
                Checkout
              </a>
            </>
          ) : (
            <h6>record not found</h6>
          )}
        </div>
      )}
    </>
  );
}

export default CartDetails;
