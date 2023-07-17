import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getAllUser: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.user.findMany();
    }),
});
