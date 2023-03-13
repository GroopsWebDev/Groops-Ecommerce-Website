import React, { useState } from "react";

import Item from "../../../../public/assets/shop/items/item.svg"
import Left from "../../../../public/assets/product/item/left.svg"
import Right from "../../../../public/assets/product/item/right.svg"


const Carousel = () => {

  const items = [
    { price: 19.99, name: "item1" },
    { price: 19.99, name: "item1" },
    { price: 19.99, name: "item3" },
    { price: 19.99, name: "item1" },
    { price: 19.99, name: "item5" },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const getItemsToDisplay = () => {

    if (items.length <= 4) {
      return items;
    }
    const itemsToDisplay = [];
    if (items.length > 0) {
      for (let i = currentIndex; i < currentIndex + 4; i++) {
        itemsToDisplay.push(items[i % items.length]);
      }
    }
    return itemsToDisplay;
  };

  return (
    <div className="flex flex-row flex-wrap justify-center space-x-10">
      <button onClick={() => { setCurrentIndex(currentIndex - 1); }}>
        <Left className="w-10 mb-16"></Left>
      </button>

      {getItemsToDisplay().map((item) => (
        <div>
          <Item className="w-64"></Item>
          <h5 className="text-blue mt-2">{item ? item.name : null}</h5>
          <p>${item ? item.price : null}</p>
        </div>
      ))}

      <button onClick={() => {setCurrentIndex(currentIndex + 1);}}>
        <Right className="w-10 mb-16"></Right>
      </button>
    </div>
  );
};

export default Carousel;