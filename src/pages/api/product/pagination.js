import { prisma } from "../../../server/db/client";

const PFilter = {
  PHL: "desc",
  PLH: "asc",
  RHL: "desc",
  RLH: "asc",
};

export default async function handler(req, res) {
  try {
    const page = parseInt(req.body.page) || 1;
    const perPage = parseInt(req.body.perPage) || 10;
    console.log("--------", page)
    console.log("--------", perPage)
    const { categoryName, sortBy } = req.body;
    const orderBy = PFilter[sortBy] ? PFilter[sortBy] : "desc";

    
    const where = {};
    if (categoryName) {
      where['category'] = {
        name: categoryName
      }
    }


    const product = await prisma.product.findMany({
      skip: (page - 1) * perPage,
      take: perPage,
      where: where,
      orderBy: {
        price: orderBy,
      },
    });

    const count = await prisma.product.count({
      where: where
    });


    res.status(200).json({
      status: 200,
      data: product,
      count: Math.ceil(count / perPage),
    });
  } catch (e) {
    console.error(e);
    res.json({ status: 500, message: e.message });
  }
}
