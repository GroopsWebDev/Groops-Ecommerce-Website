import { z } from "zod";
import { TRPCError, initTRPC } from '@trpc/server';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({

  getAllProducts: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.product.findMany();
    }),

  getById: publicProcedure
    .input(z.object({ skuid: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findUnique({
        where: { ...input }
      })
    }),

    createProduct: publicProcedure
    .input(z.object({

      skuid: z.string(),
      englishProductName: z.string(),
      chineseProductNName: z.string(),
      frenchProductNName: z.string(),
      placeOfOrigin: z.string(),
      productWeight: z.string(),
      description: z.string(),
      alcohol: z.boolean(),
      price: z.number(),
      image: z.string(),
      categoryId: z.number(),
      retailPrice: z.number(),
      costPrice: z.number(),
      stock: z.number(),
      alcoholPercentage: z.number(),
      specification: z.string(),
      nutritionFact:  z.string()

    })).mutation(({ ctx, input }) => {

      if (!input.skuid || !input.englishProductName || !input.productWeight || !input.image) {

        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: "SKU ID, English Product Name, Product Weight, and Image are required",
        });
      }

      return ctx.prisma.product.create({ data: {
        skuid: input.skuid,
        englishProductName: input.englishProductName,
        chineseProductNName: input.chineseProductNName,
        frenchProductNName: input.frenchProductNName,
        placeOfOrigin: input.placeOfOrigin,
        productWeight: input.productWeight,
        description: input.description,
        alcohol: input.alcohol,
        price: input.price,
        image: input.image,
        categoryId: input.categoryId,
        retailPrice: input.retailPrice,
        costPrice: input.costPrice,
        stock: input.stock,
        alcoholPercentage: input.alcoholPercentage,
        specification: input.specification,
        nutritionFact:  input.nutritionFact,

      } })
    }),

});