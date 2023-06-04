import { z } from "zod";

import { router, publicProcedure } from "~/server/api/trpc";

export const walletRouter = router({

  getWalletValue: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.wallet.findUnique({ where: { userId: input.userId } });
    }),

  addWalletValue: publicProcedure
    .input(z.object({ userId: z.string(), value: z.number() })) //what is this skuid?
    .mutation(({ ctx, input }) => {
      return ctx.prisma.wallet.upsert(
        {
          where: { userId: input.userId },
          update: { amount: input.value },
          create: { userId: input.userId, amount: input.value }
        })
    }),

});