import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
//nextAuth
import { useSession, getSession } from "next-auth/react";
import axios from "axios";
import { Image } from "react-bootstrap";
import OrderList from "../../components/orderList/orderList";

const useGroupOrder = () => {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    const res = await axios.get("/api/order/groupOrder");
    console.log(res.data.order);
    if (res.data.status == 200) {
      setOrder(res.data.order);
    }
  };
  return (
    <>
      <div className="text-6xl">
        <OrderList orders={order} />
      </div>
    </>
  );
};

export default useGroupOrder;
