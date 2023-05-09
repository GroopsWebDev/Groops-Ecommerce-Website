import { prisma } from "../../../server/db/client";
import handlePrismaError from "../../../utils/prismaExpHanlder";

export default async function GetDataById(req, res) {
  try {
    const id = req.query.id;
    const product = await prisma.product.findUnique({
      where: { skuid: id },
      // include: { category: true },
    });
    if (product) {
      return res.json({ status: 200, success: true, product });
    }
    return res.json({
      status: 400,
      success: false,
      message: "Product not found.",
    });
  } catch (e) {
    const error = handlePrismaError(e);
    return res.json(error);
  }
}
