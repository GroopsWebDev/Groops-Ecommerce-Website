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
      const { userId, groupName, endDate } = req.body;
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        return res.json({ message: "User not found", status: 400 });
      }

      const cart = await prisma.cart.findMany({
        where: { userId },
        include: { product: true },
      });
      const totalCartPrice = cart.reduce((a, c) => a + c.product.price, 0);
      if (totalCartPrice >= 0) {
        const group = await prisma.group.create({
          data: {
            groupMaster: { connect: { id: userId } },
            groupName: groupName,
            endDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
          },
        });

        res
          .status(200)
          .json({ status: 200, group, message: "Group Create Successfully." });
      } else {
        res.status(400).json({ message: "Cart total must be greater than 40" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (e) {
    console.error(e);
    return res.json(handlePrismaError(e));
  }
}
