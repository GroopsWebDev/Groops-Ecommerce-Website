import { prisma } from "../../../server/db/client";

export default async function CartQuantity(req, res) {
  try {
    const { cartId, qty } = req.body;

    if (qty == 0) {
      await prisma.cart.delete({ where: { id: cartId } });
      return res.status(200);
    } else {
      const cartItem = await prisma.cart.update({
        where: { id: cartId },
        data: { qty: qty },
      });
      res.json({ status: 200, message: "success", data: cartItem });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
