import { z } from "zod";
import { prisma } from "../../db";
import { router, publicProcedure } from "~/server/api/trpc";

export const categoryRouter = router({
  getCategory: publicProcedure
    .query(() => {
      return prisma.category.findMany();
  }),  


});