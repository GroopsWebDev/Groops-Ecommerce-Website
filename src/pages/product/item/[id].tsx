import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Spinner } from "react-bootstrap";
import HelpCenter from "../../../components/help/help-center";
import ShoppingCartPopUp from "../../../components/userCenterText/shoppingCartPopup";
import Advertisement from "../../../../public/assets/shop/advertisement/advertisement.svg";
import Heart from "../../../../public/assets/shop/items/heart.svg";
import Add from "../../../../public/assets/shop/items/add.svg";
import Minus from "../../../../public/assets/shop/items/minus.svg";
import Share from "../../../../public/assets/shop/items/share.svg";
import AddCart from "../../../../public/assets/shop/items/add-to-cart.svg";
import Policy from "../../../../public/assets/product/item/policy.svg";
import Spec from "../../../../public/assets/product/item/spec.svg";
import OnPolicy from "../../../../public/assets/product/item/policy-on.svg";
import OnSpec from "../../../../public/assets/product/item/spec-on.svg";
import Policies from "../../../../public/assets/product/item/policies.svg";
import Left from "../../../../public/assets/product/item/left.svg";
import Right from "../../../../public/assets/product/item/right.svg";
import Based from "../../../../public/assets/product/item/based-on-like.svg";
import CommentFrame from "../../../../public/assets/product/item/comment-frame.svg";
import Star from "../../../../public/assets/product/item/star.svg";
import Frame from "../../../../public/assets/shop/items/item.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Item() {
  const router = useRouter();
  const { id } = router.query;
  const { data: sessionData } = useSession();

  const [page, setPage] = useState(0);
  const [product, setProduct] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShoppingCartPopupVisible, setShoppingCartPopupVisible] = useState(false);
  const [disable, setDisable] = useState(false);

  const imagePath = "https://api.gr-oops.com/";
  const notify = () =>
    toast.success(product?.englishProductName + " Added to cart 👌");

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      async function fetchData() {
        const response = await fetch(
          "http://localhost:3000/api/product/getById?id=" + id
        );
        const json = await response.json();
        if (json.status == 200) {
          setProduct(json.product);
          setIsLoading(false);
        } else {
          alert("product not found");
        }
      }
      fetchData();
    }
  }, [id]);

  async function AddToCart() {
    // if (!sessionData) {
    //   alert("Login Required");
    //   return;
    // }
    // setDisable(true);
    const postData = {
      product_id: id,
      quantity: "1",
      userId: sessionData?.user?.id,
    };

    const res = await fetch("/api/cart/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await res.json();
    // setDisable(false);
    if (data.status == 200) {
      // router.push("/member/shoppingCart");
      notify();
    }

    // invoke the shopping cart popup
    setShoppingCartPopupVisible(true);
  }

  const Description = () => {
    return (
      <>
        {isLoading ? (
          <Spinner style={{ marginLeft: "700px" }} />
        ) : (
          <div>
            <h1>{product?.englishProductName}</h1>
            <p className="mt-3">{product?.category?.name}</p>

            <div className="flex flex-row gap-x-9">
              <p className="mt-3">$ {product?.price}</p>
              <Heart className="w-7"></Heart>
              <Share className="mt-3"></Share>
            </div>

            <div className="mt-5 flex flex-row gap-x-9">
              <Add className="mt-1"></Add>
              <Minus className="mt-1"></Minus>
              {sessionData?.user ? (
                <div>
                  <button onClick={AddToCart}>
                    <AddCart />
                  </button>
                  <Link href="/member/shoppingCart">
                    <ToastContainer position="bottom-right" />
                  </Link>
                </div>
              ) : (
                <div className="bg-black px-4 py-2 text-white">
                  Please login to add to cart
                </div>
              )}
            </div>

            <Based className="mt-10"></Based>
            <BasedOnLikes></BasedOnLikes>
          </div>
        )}
      </>
    );
  };

  const Comments = () => {
    type ratingprop = { rating: number };

    // show stars for rating
    const Stars = ({ rating }: ratingprop) => {
      let dummy: number[] = [];
      for (let i = 0; i < rating && i < 5; i++) {
        dummy.push(1);
      }
      return (
        <div className="absolute top-5 right-5 z-10 flex flex-row">
          {dummy.map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      );
    };

    type props = {
      username: string;
      comments: string;
      date: string;
      rating: number;
    };

    // a single comment
    const Comment = ({ username, comments, date, rating }: props) => {
      return (
        <>
          <div className="relative">
            <CommentFrame></CommentFrame>
            <div>
              <h5 className="absolute top-5 left-5 z-10">{username}</h5>
              <p className="absolute top-12 left-5 z-10">{comments}</p>
              <p className="absolute bottom-3 right-5 z-10">{date}</p>
              <Stars rating={rating} />
            </div>
          </div>
        </>
      );
    };

    // a grid of comments
    return (
      <>
        <div className="ml-20 mr-20 mt-20 grid grid-cols-3 gap-3">
          <Comment
            username="username"
            comments="Dummy comments"
            date="2020/01/22"
            rating={1}
          ></Comment>
          <Comment
            username="username"
            comments="Dummy comments"
            date="2020/01/22"
            rating={2}
          ></Comment>
          <Comment
            username="username"
            comments="Dummy comments"
            date="2020/01/22"
            rating={3}
          ></Comment>
          <Comment
            username="username"
            comments="Dummy comments"
            date="2020/01/22"
            rating={4}
          ></Comment>
          <Comment
            username="username"
            comments="Dummy comments"
            date="2020/01/22"
            rating={5}
          ></Comment>
        </div>
      </>
    );
  };

  const Specs = () => {
    const style = "flex flex-col justify-center place-items-center gap-y-3";
    return (
      <>
        <div className="mt-20 flex flex-row flex-wrap justify-center gap-8 gap-x-64">
          <div className={style}>
            <h4>Rating</h4>
            <h4 className="text-purple-600">4.5</h4>
          </div>

          <div className={style}>
            <h4>Place of Product</h4>
            <h4 className="text-purple-600">TAIWAN</h4>
          </div>

          <div className={style}>
            <h4>Category</h4>
            <h4 className="text-purple-600">SOFT DRINK</h4>
          </div>

          <div className={style}>
            <h4>Volume</h4>
            <h4 className="text-purple-600">300g/bag</h4>
          </div>
        </div>

        <div className="mt-20 flex flex-row justify-center">
          <h2 className="text-purple-600">REVIEWS & COMMENTS</h2>
        </div>

        <Comments></Comments>
      </>
    );
  };

  const RecentView = () => {
    const items = [
      { price: 19.99, name: "item1" },
      { price: 19.99, name: "item2" },
      { price: 19.99, name: "item3" },
      { price: 19.99, name: "item4" },
      { price: 19.99, name: "item5" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const getItemsToDisplay = () => {
      if (items.length <= 4) {
        return items;
      }
      const itemsToDisplay = [];
      if (currentIndex < 0) {
        setCurrentIndex(items.length + (currentIndex % items.length));
      }
      if (items.length > 0) {
        for (let i = currentIndex; i < currentIndex + 4; i++) {
          itemsToDisplay.push(items[i % items.length]);
        }
      }
      return itemsToDisplay;
    };

    return (
      <div className="mt-20 flex flex-row flex-wrap justify-center space-x-6">
        <button
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        >
          <Left className="mb-16 w-10"></Left>
        </button>

        {getItemsToDisplay().map((item, index) => (
          <div key={index}>
            <Frame className="w-64"></Frame>
            <h5 className="mt-2 text-blue-400">{item ? item.name : null}</h5>
            <p>${item ? item.price : null}</p>
          </div>
        ))}

        <button
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        >
          <Right className="mb-16 w-10"></Right>
        </button>
      </div>
    );
  };

  const BasedOnLikes = () => {
    const items = [
      { price: 19.99, name: "item1" },
      { price: 19.99, name: "item2" },
      { price: 19.99, name: "item3" },
      { price: 19.99, name: "item4" },
      { price: 19.99, name: "item5" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const getItemsToDisplay = () => {
      if (items.length <= 3) {
        return items;
      }
      const itemsToDisplay = [];
      if (currentIndex < 0) {
        setCurrentIndex(items.length + (currentIndex % items.length));
      }

      if (items.length > 0) {
        for (let i = currentIndex; i < currentIndex + 3; i++) {
          itemsToDisplay.push(items[i % items.length]);
        }
      }
      return itemsToDisplay;
    };

    return (
      <div className="mt-10 flex flex-row flex-wrap justify-center space-x-6">
        <button
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        >
          <Left className="mb-16 w-3"></Left>
        </button>

        {getItemsToDisplay().map((item, index) => (
          <div key={index}>
            <Frame className="broder w-24"></Frame>
            <h5 className="mt-2 text-blue-400">{item ? item.name : null}</h5>
            <p>${item ? item.price : null}</p>
          </div>
        ))}

        <button
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        >
          <Right className="mb-16 w-3"></Right>
        </button>
      </div>
    );
  };

  return (
    <>
      {/* product details */}
      <div className="grid grid-cols-2 place-items-center">
        <img
          alt="product image"
          src={imagePath + product?.image}
          className="w-full rounded-xl"
        />
        <div>
          <Description />
        </div>
      </div>

      {/* two page buttons */}
      <div className="mt-16 flex flex-row justify-center gap-x-72">
        <button onClick={() => setPage(0)}>
          {page ? <Spec></Spec> : <OnSpec></OnSpec>}
        </button>
        <button onClick={() => setPage(1)}>
          {1 - page ? <Policy></Policy> : <OnPolicy></OnPolicy>}
        </button>
      </div>
      <hr />

      {/* product specs */}
      <div>
        {1 - page ? (
          <Specs></Specs>
        ) : (
          <Policies className="ml-20 mr-20 mt-20"></Policies>
        )}
      </div>

      <Advertisement className="mt-20 w-full" />

      <h2 className="mt-20 text-center text-purple-600">Recently Viewed</h2>
      <RecentView></RecentView>

      <HelpCenter />
      
      {/* shopping cart popup */}
      { isShoppingCartPopupVisible ? <ShoppingCartPopUp /> : null}
    </>
  );
}
