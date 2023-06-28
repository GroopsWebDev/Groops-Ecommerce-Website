import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const addressRouter = createTRPCRouter({

  getUserAddress: publicProcedure
    .input(z.object({ userEmail: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.address.findMany({ where: { user_email: input.userEmail } });
    }),

  createOrChangeAddress: publicProcedure
    .input(z.object({
      id: z.number(),
      userEmail: z.string(),
      primary: z.boolean(),
      line1: z.string(),
      line2: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      first: z.string(),
      last: z.string(),
      code: z.string(),
    }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.address.upsert({
        where: { id: input.id },
        update: { ...input },
        create: {
          user_email: input.userEmail,
          is_primary_: input.primary,
          line1: input.line1,
          line2: input.line2,
          city: input.city,
          state: input.state,
          country: input.country,
          first_name: input.first,
          last_name: input.first,
          postal_code: input.code,
        }
      })
    }),

  deleteAddress: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.address.delete({
        where: { ...input }
      });
    }),
});