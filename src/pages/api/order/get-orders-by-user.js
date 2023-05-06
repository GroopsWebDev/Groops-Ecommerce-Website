import { prisma } from "../../../../server/db/client";

async function GetOrdersByUser(req, res) {
  try {
    const orders = await prisma.orders.findMany({
      where: { userId: req.body.userId }
    });

    return res.status(200).json(orders);

  } catch (error) {
    res.status(200).json({ message: error.message, status: 400 });
  }
}