import { prisma } from "../../../server/db/client";

export default async function handler(req, res) {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;

  const categories = await prisma.category.findMany({
    skip: (page - 1) * perPage,
    take: perPage,
  });

  const count = await prisma.category.count();

  res.status(200).json({
    status: 200,
    data: categories,
    count: Math.ceil(count / perPage),
  });
}
