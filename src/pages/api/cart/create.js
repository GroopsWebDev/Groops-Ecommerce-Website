import { prisma } from "../../../server/db/client";

async function CreateCart(req, res) {
  try{
    const { product_id, quantity, userId } = req.body;

    const existingCartItem = await prisma.cart.findFirst({
      where: {
        productId: product_id,
        userId: userId,
      },
    });
    if (existingCartItem) {
      let qty = parseInt(existingCartItem.qty) + parseInt(quantity);
      await prisma.cart.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          qty: qty.toString(),
        },
      });

      res.status(200).json({ message: "Cart item updated", status: 200 });
    } else {
      const cartItem = await prisma.cart.create({
        data: {
          productId: product_id,
          userId: userId,
          qty: quantity,
        },
      });
      res.json({ status: 200, cartItem });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default CreateCart;
