import React from "react";
import { useState } from "react"

import { useRouter } from 'next/router';

import HelpCenter from "../../../components/help/help-center";
import Advertisement from "../../../../public/assets/shop/advertisement/advertisement.svg";
import DummyImage from "./dummy-image.svg";
import Heart from "../../../../public/assets/shop/items/heart.svg"
import Add from "../../../../public/assets/shop/items/add.svg"
import Minus from "../../../../public/assets/shop/items/minus.svg"
import Share from "../../../../public/assets/shop/items/share.svg"
import AddCart from "../../../../public/assets/shop/items/add-to-cart.svg"
import Policy from "../../../../public/assets/product/item/policy.svg"
import Spec from "../../../../public/assets/product/item/spec.svg"
import OnPolicy from "../../../../public/assets/product/item/policy-on.svg"
import OnSpec from "../../../../public/assets/product/item/spec-on.svg"
import Policies from "../../../../public/assets/product/item/policies.svg"
import Write from "../../../../public/assets/product/item/write-review.svg"
import Left from "../../../../public/assets/product/item/left.svg"
import Right from "../../../../public/assets/product/item/right.svg"
import Based from "../../../../public/assets/product/item/based-on-like.svg"
import CommentFrame from "../../../../public/assets/product/item/comment-frame.svg"
import Star from "../../../../public/assets/product/item/star.svg"

import Frame from "../../../../public/assets/shop/items/item.svg"

const ProductImages = () => {
  return <>
    <DummyImage></DummyImage>
  </>
}

const Description = () => {

  return <>
    <h1>Product Name</h1>
    <p className="mt-3">Type Subtype</p>

    <div className="flex flex-row gap-x-9">
      <p className="mt-3">$19.99</p>
      <Heart className="w-7"></Heart>
      <Share className="mt-3"></Share>
    </div>

    <div className="flex flex-row gap-x-9 mt-5">
      <Add className="mt-1"></Add>
      <Minus className="mt-1"></Minus>
      <button><AddCart></AddCart></button>
    </div>

    <Based className="mt-10"></Based>
    <BasedOnLikes></BasedOnLikes>
  </>
}

const Specs = () => {

  const style = "flex flex-col justify-center place-items-center gap-y-3"
  return <>

    <div className="flex flex-row flex-wrap gap-8 justify-center mt-20 gap-x-64">

      <div className={style}>
        <h4>Rating</h4>
        <h4 className="text-purple">4.5</h4>
      </div>

      <div className={style}>
        <h4>Place of Product</h4>
        <h4 className="text-purple">TAIWAN</h4>
      </div>

      <div className={style}>
        <h4>Category</h4>
        <h4 className="text-purple">SOFT DRINK</h4>
      </div>

      <div className={style}>
        <h4>Volume</h4>
        <h4 className="text-purple">300g/bag</h4>
      </div>
    </div>

    <div className="flex flex-row justify-center mt-20">
      <h2 className="text-purple">REVIEWS & COMMENTS</h2>
    </div>

    <Comments></Comments>

  </>
}

const RecentView = () => {

  const items = [
    { price: 19.99, name: "item1" },
    { price: 19.99, name: "item2" },
    { price: 19.99, name: "item3" },
    { price: 19.99, name: "item4" },
    { price: 19.99, name: "item5" },
  ]

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
    <div className="flex flex-row flex-wrap justify-center space-x-6 mt-20">
      <button onClick={() => { setCurrentIndex(currentIndex - 1); }}>
        <Left className="w-10 mb-16"></Left>
      </button>

      {getItemsToDisplay().map((item, index) => (
        <div key={index}>
          <Frame className="w-64"></Frame>
          <h5 className="text-blue mt-2">{item ? item.name : null}</h5>
          <p>${item ? item.price : null}</p>
        </div>
      ))}

      <button onClick={() => { setCurrentIndex(currentIndex + 1); }}>
        <Right className="w-10 mb-16"></Right>
      </button>
    </div>
  );
}

const BasedOnLikes = () => {

  const items = [
    { price: 19.99, name: "item1" },
    { price: 19.99, name: "item2" },
    { price: 19.99, name: "item3" },
    { price: 19.99, name: "item4" },
    { price: 19.99, name: "item5" },
  ]

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
    <div className="flex flex-row flex-wrap justify-center space-x-6 mt-10">
      <button onClick={() => { setCurrentIndex(currentIndex - 1); }}>
        <Left className="w-3 mb-16"></Left>
      </button>

      {getItemsToDisplay().map((item, index) => (
        <div key={index}>
          <Frame className="w-24 broder"></Frame>
          <h5 className="text-blue mt-2">{item ? item.name : null}</h5>
          <p>${item ? item.price : null}</p>
        </div>
      ))}

      <button onClick={() => { setCurrentIndex(currentIndex + 1); }}>
        <Right className="w-3 mb-16"></Right>
      </button>
    </div>
  );
}

const Comments = () => {

  type ratingprop = { rating: number };

  const Stars = ({ rating }: ratingprop) => {

    let dummy: number[] = [];

    for (let i = 0; i < rating && i < 5; i++) {
      dummy.push(1);
    }

    return <div className="flex flex-row absolute z-10 top-5 right-5">
      {dummy.map((_, index) => (<Star key={index}/>))}
    </div>
  }

  type props = {
    username: string, comments: string, date: string, rating: number
  }

  const Comment = ({ username, comments, date, rating }: props) => {
    return <>
      <div className="relative">
        <CommentFrame></CommentFrame>
        <div>
          <h5 className="absolute z-10 top-5 left-5">{username}</h5>
          <p className="absolute z-10 top-12 left-5">{comments}</p>
          <p className="absolute z-10 bottom-3 right-5">{date}</p>
          <Stars rating={rating} />
        </div>
      </div>
    </>
  }

  return <>
    <div className="grid grid-cols-3 gap-3 ml-20 mr-20 mt-20">
      <Comment username="username" comments="Dummy comments"
        date="2020/01/22" rating={1}></Comment>
      <Comment username="username" comments="Dummy comments"
        date="2020/01/22" rating={2}></Comment>
      <Comment username="username" comments="Dummy comments"
        date="2020/01/22" rating={3}></Comment>
      <Comment username="username" comments="Dummy comments"
        date="2020/01/22" rating={4}></Comment>
      <Comment username="username" comments="Dummy comments"
        date="2020/01/22" rating={5}></Comment>
    </div>
  </>
}


export default function Item() {

  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState(0);

  return <>

    <div className="grid grid-cols-2 place-items-center">
      <ProductImages></ProductImages>
      <div><Description></Description></div>
    </div>

    <div className="flex flex-row gap-x-72 justify-center mt-16">
      <button onClick={() => setPage(0)}>
        {page ? <Spec></Spec> : <OnSpec></OnSpec>}
      </button>
      <button onClick={() => setPage(1)}>
        {(1 - page) ? <Policy></Policy> : <OnPolicy></OnPolicy>}
      </button>
    </div>
    <hr />

    <div>
      {(1 - page) ? <Specs></Specs> :
        <Policies className="ml-20 mr-20 mt-20"></Policies>}
    </div>

    <Advertisement className="w-full mt-20" />

    <div className="flex justify-center mt-20">
      <h2 className="text-purple">Recently Viewed</h2>
    </div>

    <RecentView></RecentView>

    <HelpCenter />
  </>
}