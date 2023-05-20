import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const groupRouter = createTRPCRouter({

  getAllGroups: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.group.findMany();
    }),

  getById: publicProcedure
    .input(z.object({ groupId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.group.findUnique({
        where: { groupId: input.groupId }
      })
    })

});