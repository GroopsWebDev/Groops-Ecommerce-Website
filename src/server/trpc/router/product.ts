import { router, publicProcedure } from '../trpc';
import z from "zod";

export const productRouter = router({
    upload: publicProcedure
        .input(z.object({
            name: z.string()
        }))
        .mutation(({ ctx, input }) => {
            const { name } = input;
            const uploadProduct = await ctx.prisma.upload.create({
                data: {
                    name
                }
            })
            return uploadProduct;
        })
})