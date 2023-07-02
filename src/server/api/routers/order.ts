import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const orderRouter = createTRPCRouter({

  getUserOrders: publicProcedure
    .input(z.object({ userEmail: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.order.findMany({ where: { user_Clerk_id: input.userEmail } });
    }),

});