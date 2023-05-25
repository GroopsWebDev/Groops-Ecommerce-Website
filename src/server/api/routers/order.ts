import { z } from "zod";

import { router, publicProcedure } from "~/server/api/trpc";

export const orderRouter = router({

  getUserOrders: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.order.findMany({ where: { userId: input.userId } });
    }),

});