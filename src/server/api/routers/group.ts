import { z } from "zod";
import { cuid } from 'prisma';

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { generateCode } from "../../../utils/utils";

export const groupRouter = createTRPCRouter({
  getAllGroups: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.group.findMany();
  }),

  getById: publicProcedure
    .input(z.object({ groupId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.group.findUnique({
        where: { groupId: input.groupId },
      });
    }),

  createGroup: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        groupName: z.string(),
        groupImg: z.string(),
        endDate: z.date(),
      })
    )
    .mutation(({ ctx, input }) => {
      // const groupId = cuid(); // Generate groupId using cuid()
      return ctx.prisma.group.create({
        data: {
          
          groupMasterId: input.userId,
          groupName: input.groupName,
          groupImg: input.groupImg,
          endDate: input.endDate,
          groupCode: generateCode(),
        },
      });
    }),

  deleteGroup: publicProcedure
    .input(z.object({ groupId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.group.delete({
        where: { groupId: input.groupId },
      });
    }),
});
