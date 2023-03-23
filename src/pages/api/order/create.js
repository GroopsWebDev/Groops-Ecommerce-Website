import { prisma } from "../../../server/db/client";

async function createOrder(
  userId,
  payment_intent,
  groupId,
  addressId,
  salesTax,
  delivery,
  greenFee,
  tipDelivery
) {
  const cartItem = await prisma?.cart.findMany({
    where: { userId: userId },
    include: {
      product: true,
    },
  });
  if (cartItem.length == 0) {
    return false;
  }

  const total = cartItem.reduce(
    (acc, item) => acc + item.product.price * item.qty,
    0
  );

  // get shipping Address
  // const address = await prisma.shippingAddress.findFirst({
  //   where: { id: addressId },
  // });
  const order = await prisma.order.create({
    data: {
      userId: userId,
      subTotal: total,
      paymentIntent: payment_intent,
      groupId: groupId ? groupId : null,
      salesTax: salesTax,
      delivery: delivery,
      greenFee: greenFee,
      tipDelivery: tipDelivery ? parseInt(tipDelivery) : null,
      total: total,
      // please replace new total
      // shippingAddress: address ? address : null,
    },
  });
  const orderItem = cartItem.map((i) => {
    return { productId: i.productId, orderId: order.orderId, qty: i.qty };
  });
  await prisma.purchasedItem.createMany({
    data: orderItem,
  });
  await prisma.cart.deleteMany({ where: { userId: userId } });
  return order;
}

export default async function handler(req, res) {
  try {
    const {
      userId,
      payment_intent,
      groupId,
      addressId,
      salesTax,
      delivery,
      greenFee,
      tipDelivery,
    } = req.body;
    const existing = await prisma.order.findFirst({
      where: { userId, paymentIntent: payment_intent },
    });
    if (existing) {
      return res.status(200).json({ message: "success" });
    }
    const order = await createOrder(
      userId,
      payment_intent,
      groupId,
      addressId,
      salesTax,
      delivery,
      greenFee,
      tipDelivery
    );
    if (groupId) {
      await prisma.groupMember.create({
        data: {
          groupId: groupId,
          userId: userId,
        },
      });
    }

    res.json({ status: 200, message: "Order Created", order });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: error.message });
  }
}
