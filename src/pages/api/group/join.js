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

      const existingGroup = await prisma.group.findFirst({
        where: {
          groupMasterId: userId,
          endDate: {
            gte: new Date(),
          },
          groupName: {
            not: "",
          },
        },
      });

      if (existingGroup) {
        return res.json({
          status: 400,
          message:
            "You can't join a group until your created the group is ended.",
        });
      }
      const existing = await prisma.groupMember.findFirst({
        where: {
          groupId: groupId,
          userId: userId,
        },
      });

      if (existing) {
        return res.json({
          status: 200,
          group: { groupId },
        });
      }

      const cart = await prisma.cart.findMany({
        where: { userId },
        include: { product: true },
      });
      const totalCartPrice = cart.reduce(
        (a, c) => a + c.product.price * c.qty,
        0
      );
      if (totalCartPrice >= 30) {
        // const group = await prisma.groupMember.create({
        //   data: {
        //     groupId: groupId,
        //     userId: userId,
        //   },
        // });
        res.status(200).json({
          status: 200,
          group: { groupId },
          message: "Group Join Successfully.",
        });
      } else {
        res.status(200).json({
          status: 400,
          message: "Cart item price must be grether then $30.",
        });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (e) {
    console.error(e);
    return res.json(handlePrismaError(e));
  }
}
