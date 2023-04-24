import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const imagePath = "https://api.gr-oops.com/";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import ExitPopupButton from "../tailwind-buttons/exit-pop-up-btn";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ShoppingCartPopUp: React.FC<any> = (props) => {
  const { isOpen, onClose } = props;
  const router = useRouter();

  const [cartList, setCartList] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch("/api/cart/getcart");
      const json = await response.json();
      setCartList(json);
      setLoading(false);
    }
    fetchData();
  }, []);
  useEffect(() => {
    const price = cartList.reduce(
      (acc: any, item: any) => acc + item.product.price * item.qty,
      0
    );
    setTotalPrice(price);
  }, [cartList]);

  const updateItemQuantity = (itemId: any, newQuantity: any) => {
    // find the index of the item in the cartList
    const itemIndex = cartList.findIndex((item: any) => item.id == itemId);

    if (itemIndex !== -1) {
      // item found in cartList
      // create a new copy of the cartList to avoid directly modifying the original state
      const newCartList = [...cartList];

      // update the quantity of the identified item in the new cartList copy
      if (newQuantity === 0) {
        // if new quantity is zero, remove the item from the cartList
        newCartList.splice(itemIndex, 1);
      } else {
        // otherwise, update the quantity of the identified item in the new cartList copy
        newCartList[itemIndex].qty = newQuantity;
      }
      // update the cartList state with the new copy
      setCartList(newCartList);
      axios.post("/api/cart/updateQty", {
        cartId: itemId,
        qty: newQuantity.toString(),
      });
    }
  };
  const incrementItemQuantity = (itemId: any) => {
    // find the current quantity of the item in the cart
    const currentItem = cartList.find((item: any) => item.id == itemId);
    const currentQuantity = currentItem ? parseInt(currentItem.qty) : 0;

    // increment the quantity by 1
    const newQuantity = currentQuantity + 1;

    // update the quantity of the item in the cart
    updateItemQuantity(itemId, newQuantity);
  };

  // function to decrement the quantity of an item in the cart
  const decrementItemQuantity = (itemId: any) => {
    // find the current quantity of the item in the cart
    const currentItem = cartList.find((item: any) => item.id === itemId);
    const currentQuantity = currentItem ? parseInt(currentItem.qty) : 0;

    // decrement the quantity by 1, but not below 0
    const newQuantity = Math.max(currentQuantity - 1, 0);

    // update the quantity of the item in the cart
    updateItemQuantity(itemId, newQuantity);
  };

  const goToCheckout = () => {
    setDisable(true);
    router.push("/checkout");
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="mx-auto w-10/12 px-6 pt-6 pb-1">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          My Shopping Cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={onClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto w-10/12 border-b border-gray-200"></div>
                    {cartList.length ? (
                      <ul
                        role="list"
                        className="flex-1 divide-y divide-gray-200 overflow-y-auto"
                      >
                        {cartList.map((item: any, index: any) => (
                          <li key={index}>
                            <div className="group relative flex items-center px-5 py-6">
                              <div
                                className="absolute inset-0 group-hover:bg-gray-50"
                                aria-hidden="true"
                              />
                              <Link href="#">
                                {" "}
                                {/* click on a product -> route to this product detail page  */}
                                <div className="relative flex min-w-0 flex-1 items-center">
                                  <span className="relative inline-block flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full"
                                      src={imagePath + item["product"].image}
                                      alt=""
                                    />
                                  </span>
                                  <div className="text-sm">
                                    <p className="ml-5 mb-1 truncate font-medium text-gray-900">
                                      {item["product"].englishProductName}
                                    </p>
                                    <div className="ml-5 mb-0 flex items-center justify-center space-x-2 truncate">
                                      <p className="mx-0 inline-flex text-gray-500">
                                        category {item["product"].categoryId}
                                      </p>
                                      <p className="inline-flex text-gray-500">
                                        Subtype
                                      </p>
                                    </div>
                                    <div className="ml-5 space-x-1.5 truncate">
                                      <p className="inline-flex truncate text-sm text-gray-500">
                                        {item.qty} x
                                      </p>
                                      <p className="inline-flex truncate text-sm text-gray-500">
                                        ${item["product"].price}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                              <Menu
                                as="div"
                                className="relative ml-5 inline-block flex-shrink-0 space-x-2 text-left"
                              >
                                <Menu.Button className="group relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0">
                                  <span className="sr-only">
                                    Decrement Item Quantity
                                  </span>
                                  <span className="flex h-full w-full items-center justify-center rounded-full">
                                    <svg
                                      onClick={(e) => {
                                        decrementItemQuantity(item.id);
                                      }}
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="h-6 w-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  </span>
                                </Menu.Button>
                                <Menu.Button className="group relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0">
                                  <span className="sr-only">
                                    Increment Item quantity
                                  </span>
                                  <span className="flex h-full w-full items-center justify-center rounded-full">
                                    <svg
                                      onClick={(e) => {
                                        incrementItemQuantity(item.id);
                                      }}
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="h-6 w-6"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  </span>
                                </Menu.Button>
                              </Menu>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex h-5/6 flex-col justify-center p-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="mx-auto h-6 w-6 stroke-slate-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                        <p className="mx-auto text-slate-500">
                          Oops, you cart is empty
                        </p>
                      </div>
                    )}

                    <Link href="/member/shoppingCart" className="no-underline">
                      <ExitPopupButton
                        text="Go to Cart"
                        className="mx-auto mb-32 flex justify-center"
                        onClick={onClose}
                      />
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ShoppingCartPopUp;
