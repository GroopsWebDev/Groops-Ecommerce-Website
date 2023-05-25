import { z } from "zod";

import { router, publicProcedure } from "~/server/api/trpc";

export const addressRouter = router({

  getUserAddress: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.address.findMany({ where: { userId: input.userId } });
    }),

  createOrChangeAddress: publicProcedure
    .input(z.object({
      id: z.number(),
      userId: z.string(),
      primary: z.boolean(),
      line1: z.string(),
      line2: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.address.upsert({
        where: { id: input.id },
        update: {...input},
        create: {
          userId: input.userId,
          primary: input.primary,
          line1: input.line1,
          line2: input.line2,
          city: input.city,
          state: input.state,
          country: input.country,
        }
      })
    }),

  deleteAddress: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.love_list.delete({
        where: { ...input }
      });
    }),
});