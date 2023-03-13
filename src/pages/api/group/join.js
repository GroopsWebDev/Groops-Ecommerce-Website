import { prisma } from "../../../server/db/client";
import handlePrismaError from "../../../utils/prismaExpHanlder";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
export default async function handler(req, res) {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    if (req.method === "POST") {
      const { userId, groupId } = req.body;
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        return res.json({ message: "User not found", status: 400 });
      }

      const cart = await prisma.cart.findMany({
        where: { userId },
        include: { product: true },
      });
      const totalCartPrice = cart.reduce((a, c) => a + c.product.price, 0);
      if (totalCartPrice >= 30) {
        const group = await prisma.groupMember.create({
          data: {
            groupId: groupId,
            userId: userId,
          },
        });

        res
          .status(200)
          .json({ status: 200, group, message: "Group Join Successfully." });
      } else {
        res.status(400).json({ message: "Cart total must be greater than 30" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (e) {
    console.error(e);
    return res.json(handlePrismaError(e));
  }
}
