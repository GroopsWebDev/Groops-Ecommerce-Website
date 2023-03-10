import { prisma } from "../../../server/db/client";

export default async function GetData(req, res) {
  const product = await prisma.product.findMany();
  return res.json({ status: 200, product });
}
