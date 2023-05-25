import { router, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { prisma } from "../../db"

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAllUser: publicProcedure
    .query(() => {
      return prisma.user.findMany();
    }),
});
