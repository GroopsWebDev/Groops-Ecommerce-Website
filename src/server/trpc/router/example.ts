import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
        date: new Date(),
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  //example: display all user ID from DB using prisma
  getUserID:  publicProcedure.query(async ({ ctx }) => {
    const userID = await ctx.prisma.account.findMany();
    return userID.map((id) => id.userId)
  }),
});
