import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const ShoppingCartRouter = createTRPCRouter({

  getUserCartList: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.cart.findMany({ where: { userId: input.userId } });
    }),

  addCartItem: publicProcedure
    .input(z.object({ userId: z.string(), skuid: z.string(), quantity: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.cart.upsert({
        where: { userId_skuid: { userId: input.userId, skuid: input.skuid } },
        create: { ...input },
        update: { quantity: { increment: input.quantity } }
      })
    }),

  deleteItem: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.cart.delete({
        where: { ...input }
      });
    }),

  deleteAllLoveListItems: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.cart.deleteMany({
        where: { userId: input.userId }
      });
    }),
});