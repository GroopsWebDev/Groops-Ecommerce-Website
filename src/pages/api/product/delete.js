import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function ProductDelete(req, res) {
  try {
    const { cartId } = req.body;
    await prisma.cart.delete({
      where: {
        id: cartId,
      },
    });

    res.status(200).json({
      status: 200,
      message: "Cart item removed.",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
