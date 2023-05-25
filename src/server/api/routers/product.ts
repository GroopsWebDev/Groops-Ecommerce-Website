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
    .query(({ ctx, input }) => {
      return ctx.prisma.product.findUnique({
        where: { ...input }
      })
    })

});