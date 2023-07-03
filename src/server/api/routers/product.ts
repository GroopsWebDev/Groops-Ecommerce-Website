import { z } from "zod";
import { TRPCError, initTRPC } from '@trpc/server';
import { createTRPCRouter, publicProcedure } from "../trpc";

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

    // createProduct: publicProcedure
    // .input(z.object({
    //   englishProductName: z.string(),
    //   chineseProductNName: z.string(),
    //   frenchProductNName: z.string(),
    //   placeOfOrigin: z.string(),
    //   productWeight: z.string(),
    //   description: z.string(),
    //   alcohol: z.boolean(),
    //   price: z.number(),
    //   image: z.string(),
    //   categoryId: z.number(),
    //   retailPrice: z.number(),
    //   costPrice: z.number(),
    //   stock: z.number(),
    //   alcoholPercentage: z.number(),
    //   specification: z.string(),
    //   nutritionFact:  z.string()

    // })).mutation(({ ctx, input }) => {
      
    //   if (!input.englishProductName || !input.productWeight || !input.price || !input.categoryId) {
    //     throw new TRPCError({
    //       code: 'INTERNAL_SERVER_ERROR',
    //       message: "English Product Name, Product Weight, Image, Price, and Category ID are required",
    //     });
    //   }

    //   return ctx.prisma.product.create({ data: {
    //     //skuid String @id @default(cuid())
    //     english_product_name: input.englishProductName,
    //     chinese_product_name: input.chineseProductNName,
    //     french_product_name: input.frenchProductNName,
    //     place_of_origin: input.placeOfOrigin,
    //     product_weight: input.productWeight,
    //     description: input.description,
    //     alcohol: input.alcohol,
    //     price: input.price,
    //     image_url: input.image,
    //     retail_price: input.retailPrice,
    //     cost_price: input.costPrice,
    //     stock: input.stock,
    //     alcohol_percentage: input.alcoholPercentage,
    //     specification: input.specification,
    //     nutrition_fact:  input.nutritionFact,
    //     category_id: input.categoryId,
    //   } })
    // }),

});