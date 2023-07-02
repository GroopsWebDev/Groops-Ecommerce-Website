import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const walletRouter = createTRPCRouter({

  // getWalletValue: publicProcedure
  //   .input(z.object({ userEmail: z.string() }))
  //   .query(({ ctx, input }) => {
  //     return ctx.prisma.wallet.findUnique({ where: { user_Clerk_id: input.userEmail } });
  //   }),

  // addWalletValue: publicProcedure
  //   .input(z.object({ userEmail: z.string(), value: z.number() })) //what is this skuid?
  //   .mutation(({ ctx, input }) => {
  //     return ctx.prisma.wallet.upsert(
  //       {
  //         where: { user_Clerk_id: input.userEmail },
  //         update: { amount: input.value },
  //         create: { user_Clerk_id: input.userEmail, amount: input.value }
  //       })
  //   }),

});