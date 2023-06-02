import { z } from "zod";
import { prisma } from "../../db";
import { router, publicProcedure } from "~/server/api/trpc";

export const productRouter = router({

  getAllProducts: publicProcedure
    .query(() => {
      return prisma.product.findMany();
    }),

  getById: publicProcedure
    .input(z.object({ skuid: z.string() }))
    .query(({ input }) => {
      return prisma.product.findUnique({
        where: { ...input }
      })
    }),

    addProduct: publicProcedure
      .input(z.object({
        skuid: z.number(),
        englishProductName:z.string(),
        chineseProductNName:z.string(),
        frenchProductNName:z.string(),
        placeOfOrigin:z.string(),
        productWeight:z.string(),
        alcohol: z.string(),
        price: z.number(),
        retailPrice: z.number(),
        costPrice: z.number(),
        stock: z.number(),
        categoryId: z.number(),
        image: z.string(),
        description:z.string()
      }))
        .mutation(({ input }) => {
          return prisma.product.create({
            data: {
              ...input,
            }
          })
        }),

});