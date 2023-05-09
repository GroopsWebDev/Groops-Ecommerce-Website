import { prisma } from "../../../server/db/client";

export default async function GetByUser(req, res) {
  try {
    const items = await prisma.love.findMany({
      where: { userId: req.body.userId }
    });

    return res.json({status:200, items: items});

  } catch (error) {
    res.status(200).json({ message: error.message, status: 400 });
  }
}