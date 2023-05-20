import { z } from "zod";

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
    })

});