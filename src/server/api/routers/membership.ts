import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const membershipRouter = createTRPCRouter({

  addMembership: publicProcedure
    .input(z.object({}))
    .query(({ ctx, }) => {
      return ctx.prisma.group.findMany();
    }),

});