import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const membershipRouter = createTRPCRouter({

  addMembership: publicProcedure
    .input(z.object({ userId: z.string(), groupId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.group_member.create({
        data: {
          ...input,
        }
      });
    }),

  deleteMembership: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.group_member.delete({
        where: {...input}
      })
    })

});