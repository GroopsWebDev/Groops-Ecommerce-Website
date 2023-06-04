import { z } from "zod";
import { prisma } from "../../db";

import { router, publicProcedure } from "~/server/api/trpc";

export const LoveListRouter = router({

  getUserLoveList: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ input }) => {
      return prisma.love_list.findMany({ where: { userId: input.userId } });
    }),

  addLoveListItem: publicProcedure
    .input(z.object({ userId: z.string(), skuid: z.string() })) //what is this skuid?
    .mutation(({ ctx, input }) => {
      return ctx.prisma.love_list.create({ data: { userId: input.userId, skuid: input.skuid } })
    }),

  deleteItem: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.love_list.delete({
        where: { ...input }
      });
    }),

  deleteAllLoveListItems: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.love_list.deleteMany({
        where: { userId: input.userId }
      });
    }),
});