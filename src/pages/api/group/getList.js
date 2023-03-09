import { PrismaClient } from "@prisma/client";
import handlePrismaError from "../../../utils/prismaExpHanlder";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
const prisma = new PrismaClient();

export default async function GetExistingGroup(req, res) {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const group = await prisma.group.findMany({
      where: {
        endDate: {
          gt: new Date(),
        },
      },
    });

    if (group.length > 0) {
      return res.json({ status: 200, success: true, group });
    }
    return res.json({
      status: 400,
      success: false,
      message: "group not found.",
    });
  } catch (e) {
    const error = handlePrismaError(e);
    return res.json(error);
  }
}
