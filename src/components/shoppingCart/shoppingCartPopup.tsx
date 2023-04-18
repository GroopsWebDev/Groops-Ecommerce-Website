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
                              className="relative ml-2 inline-block flex-shrink-0 text-left"
                            >
                              <Menu.Button className="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span className="sr-only">
                                  Open options menu
                                </span>
                                <span className="flex h-full w-full items-center justify-center rounded-full">
                                  <EllipsisVerticalIcon
                                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Menu.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items className="absolute right-9 top-0 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                          )}
                                        >
                                          action item 1
                                        </a>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "block px-4 py-2 text-sm"
                                          )}
                                        >
                                          action item 2
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </div>
                        </li>
                      ))}
                    </ul>
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
