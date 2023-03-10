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
      const product = await prisma.product.create({
        data: {
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
        },
      });
      console.log("hii")
      return res.status(200).json({ success: true, product, status: 200 });
    } catch (error) {
      console.log("byy")
      const payload = handlePrismaError(error);
      return res.status(200).json(payload);
    }
  } else {
    console.log("gh")
    return res.status(405).json({ message: "Method not allowed" });
  }
}
