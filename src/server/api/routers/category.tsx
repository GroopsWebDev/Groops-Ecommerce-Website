import { z } from "zod";
import { generateCode } from "../../../utils/utils";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { v4 as uuidv4 } from "uuid";
export const categoryRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
});
