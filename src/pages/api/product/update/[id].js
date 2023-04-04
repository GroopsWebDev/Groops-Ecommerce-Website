// pages/api/products.js

import { prisma } from "../../../../server/db/client";
import handlePrismaError from "../../../../utils/prismaExpHanlder";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      skuid,
      englishProductName,
      chineseProductNName,
      frenchProductNName,
      placeOfOrigin,
      productWeight,
      description,
      alcohol,
      price,
      image,
      categoryId,
      retailPrice,
      costPrice,
      stock,
    } = req.body;

    // Validation
    if (!skuid || !englishProductName || !productWeight || !image) {
      return res.status(400).json({
        message:
          "SKU ID, English Product Name, Product Weight, and Image are required",
      });
    }

    try {
      const product = await prisma.product.findFirst({
        where: { skuid: skuid },
      });
      if (!product) {
        return res.json({ status: 400, message: "Product Not Found." });
      }

      await prisma.product.update({
        where: { skuid: skuid },
        data: {
          englishProductName,
          chineseProductNName,
          frenchProductNName,
          placeOfOrigin,
          productWeight,
          description,
          alcohol,
          price,
          image,
          categoryId,
          retailPrice,
          costPrice,
          stock,
        },
      });

      return res.status(200).json({
        status: 200,
        message: "Product Updated Successfully.",
      });
    } catch (error) {
      const payload = handlePrismaError(error);
      return res.status(200).json(payload);
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
