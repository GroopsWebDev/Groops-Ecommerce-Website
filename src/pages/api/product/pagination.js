import { prisma } from "../../../server/db/client";

export default async function handler(req, res) {
  const page = parseInt(req.body.page) || 1;
  const perPage = parseInt(req.body.perPage) || 10;
  console.log(req.body);
  const { categoryName } = req.body;
  const product = await prisma.product.findMany({
    skip: (page - 1) * perPage,
    take: perPage,
    where: {
      category: {
        name: categoryName,
      },
    },
  });

  const count = await prisma.product.count({
    where: {
      category: {
        name: categoryName,
      },
    },
  });

  res.status(200).json({
    status: 200,
    data: product,
    count: Math.ceil(count / perPage),
  });
}
