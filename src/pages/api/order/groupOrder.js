import { prisma } from "../../../server/db/client";
export default async function handler(req, res) {
  try {
    const order = await prisma.purchasedItem.findMany({
      where: {
        order: {
          groupId: {
            not: null,
          },
        },
      },
      include: {
        product: true,
      },
    });
    return res.json({ status: 200, order });
  } catch (e) {
    return res.json({ status: 400, message: "something went wrong." });
  }
}
