import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const ShoppingCartRouter = createTRPCRouter({

  getUserCartList: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.cart.findMany({ where: { userId: input.userId } });
    }),

  addCartItem: publicProcedure
    .input(z.object({ userId: z.string(), skuid: z.string(), }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.cart.upsert({
        where: { userId_skuid: { userId: input.userId, skuid: input.skuid } },
        create: { ...input, quantity: 1 },
        update: { quantity: { increment: 1 } }
      })
    }),

  deleteItem: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.cart.delete({
        where: { ...input }
      });
    }),

  deleteAllInCart: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.cart.deleteMany({
        where: { userId: input.userId }
      });
    }),
});