import { z } from "zod";

import { router, publicProcedure } from "~/server/api/trpc";

export const membershipRouter = router({

  fetchGroupMembership: publicProcedure
    .input(z.object({ groupId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.group_member.findMany({
        where: { ...input }
      });
    }),

  fetchUserMembership: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.group_member.findMany({
        where: { ...input }
      });
    }),

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
        where: { ...input }
      })
    })

});