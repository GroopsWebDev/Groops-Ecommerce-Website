import { Image } from "react-bootstrap";

const OrderList = ({ orders }: any) => {
  if (!orders.length) {
    return <h3 className="text-lg font-semibold">Record not found</h3>;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {orders.map((order: any) => (
        <div key={order.id} className="rounded-lg border p-4">
          {order.product.image && (
            <Image
              src={`https://api.gr-oops.com/` + order.product.image}
              alt={order?.product?.englishProductName}
              className="h-48 w-full object-cover"
            />
          )}
          <h3 className="text-lg font-semibold">
            {order?.product?.englishProductName}
          </h3>{" "}
          <p className="text-lg font-semibold">{order.qty}</p>
          <p className="text-lg font-semibold">$ {order.product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
