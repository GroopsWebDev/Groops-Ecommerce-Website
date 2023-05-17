import { prisma } from "../../../server/db/client";

export default async function handler(req, res) {
  try {
    const { userId, skuid, } = req.body;
    await prisma.love.create({data:{userId: userId, skuid: skuid}});
  } catch (error) {
    res.status(200).json({ message: error.message, status: 400 });
  }
}