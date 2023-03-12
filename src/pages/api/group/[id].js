import { prisma } from "../../../server/db/client";
import handlePrismaError from "../../../utils/prismaExpHanlder";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

export default async function handler(req, res) {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const group = await prisma.group.findUnique({
      where: {
        groupId: req.query.id,
      },
      include: {
        groupMember: {
          include: {
            user: true,
          },
        },
      },
    });

    if (group) {
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
