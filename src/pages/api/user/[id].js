import { prisma } from "../../../server/db/client";

export default async function GetDataById(req, res) {
  const userId = req.query.id;
  const user = await prisma.user.findFirst({ where: { id: userId } });
  return res.json({ status: 200, user });
}
