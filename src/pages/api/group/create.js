import { prisma } from "../../../server/db/client";
import handlePrismaError from "../../../utils/prismaExpHanlder";
import { generateCode } from "../../../utils/utils";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
export default async function handler(req, res) {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    if (req.method === "POST") {
      const { userId, groupName, endDate, groupImg } = req.body;
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
          message: "You can't create a group until the group is ended.",
        });
      }

      const cart = await prisma.cart.findMany({
        where: { userId },
        include: { product: true },
      });
      const shouldJoin = 40;
      const totalCartPrice = cart.reduce((a, c) => a + c.product.price, 0);
      if (totalCartPrice >= shouldJoin) {
        const existing = await prisma.group.findFirst({
          where: { groupName: groupName },
        });
        if (existing) {
          return res.status(200).json({
            status: 400,
            message: "Group already exists. choose different group name",
          });
        }
        const group = await prisma.group.create({
          data: {
            groupMaster: { connect: { id: userId } },
            groupName: groupName,
            groupImg: groupImg,
            endDate: endDate,
            groupCode: generateCode(),
          },
        });

        res
          .status(200)
          .json({ status: 200, group, message: "Group Create Successfully." });
      } else {
        res
          .status(200)
          .json({ status: 400, message: "Cart total must be greater than 40" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (e) {
    console.error(e);
    return res.json(handlePrismaError(e));
  }
}
