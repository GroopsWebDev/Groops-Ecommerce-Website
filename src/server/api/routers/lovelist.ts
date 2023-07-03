import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const LoveListRouter = createTRPCRouter({

  getUserLoveList: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.lovelistentry.findMany({ where: { user_Clerk_id: input.userId } });
    }),

  // addLoveListItem: publicProcedure
  //   .input(z.object({ userId: z.string(), skuid: z.string() })) //what is this skuid?
  //   .mutation(({ ctx, input }) => {
  //     return ctx.prisma.lovelistentry.create({ data: { user_Clerk_id: input.userId, sku_id: input.skuid } })
  //   }),

  deleteItem: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.lovelistentry.delete({
        where: { ...input }
      });
    }),

  deleteAllLoveListItems: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.lovelistentry.deleteMany({
        where: { user_Clerk_id: input.userId }
      });
    }),
});