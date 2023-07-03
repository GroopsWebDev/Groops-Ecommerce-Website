import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const membershipRouter = createTRPCRouter({

  fetchGroupMembership: publicProcedure
    .input(z.object({ groupId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.groupmember.findMany({
        where: { 
          group_code: { equals: input.groupId }
        }
      });
    }),

    // What is this for?
  // fetchUserMembership: publicProcedure
  //   .input(z.object({ userId: z.string() }))
  //   .query(({ ctx, input }) => {
  //     return ctx.prisma.groupmember.findMany({
  //       where: { ...input }
  //     });
  //   }),

    addGroupMember: publicProcedure
    .input(z.object({ userEmail: z.string(), groupCode: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.groupmember.create({
        data: {
          group_code: input.groupCode,
          member_Clerk_id: input.userEmail
        }
      });
    }),

    // please review the API carefully.
    addGroupCoHost: publicProcedure
    .input(z.object({ userEmail: z.string(), groupCode: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.groupmember.create({
        data: {
          group_code: input.groupCode,
          member_Clerk_id: input.userEmail
        }
      });
    }),
  
  // deleteGroupMember: publicProcedure
  //   .input(z.object({ userEmail: z.string(), groupCode: z.string() }))
  //   .mutation(({ ctx, input }) => {
  //     return ctx.prisma.groupmember.delete({
  //       where: { 
  //         group_code: input.groupCode ,
  //         member_Clerk_id: input.userEmail
  //       }
  //     })
  //   })

});