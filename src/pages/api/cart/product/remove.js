import { prisma } from "../../../../server/db/client";

export default async function RemoveProduct(req, res) {
  try {
    const { cartId } = req.body;
    await prisma.cart.delete({
      where: {
        id: cartId,
      },
    });

    return res.json({
      status: 200,
      success: true,
      message: "Cart item remove successfully.",
    }); 
  } catch (e) {
    const error = handlePrismaError(e);
    return res.json(error);
  }
}
