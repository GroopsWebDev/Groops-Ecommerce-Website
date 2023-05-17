import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const LoveListRouter = createTRPCRouter({

  getUserLoveList: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.love.findMany({ where: { userId: input.userId } });
    }),

  addLoveListItem: publicProcedure
  .input(z.object({ userId: z.string(), skuid: z.string() })) //what is this skuid?
    .mutation(({ ctx, input }) => {
      return ctx.prisma.love.create({data : { userId: input.userId, skuid: input.skuid}})
    })
});