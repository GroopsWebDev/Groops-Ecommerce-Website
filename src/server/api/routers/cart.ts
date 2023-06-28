import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const ShoppingCartRouter = createTRPCRouter({
  getUserCartList: publicProcedure
    .input(z.object({ userEmail: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.cart.findMany({
        where: { user_email: input.userEmail },
      });
    }),

  // addCartItem: publicProcedure
  // .input(z.object({ userEmail: z.string(), skuid: z.string() }))
  // .mutation(({ ctx, input }) => {
  //   return ctx.prisma.cart.upsert({
  //     where: { user_email: input.userEmail },
  //     create: {
  //       user_email: input.userEmail,
  //       quantity: 1,
  //       user: { connect: { email: input.userEmail } },
  //       product: { create: [{ skuid: input.skuid }] },
  //     },
  //     update: { quantity: { increment: 1 } },
  //   });
  // }),

  addCartItem: publicProcedure
    .input(z.object({ userEmail: z.string(), skuid: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const cart = await ctx.prisma.cart.upsert({
        where: { user_email: input.userEmail },
        create: {
          user_email: input.userEmail,
          quantity: 1,
          user: { connect: { email: input.userEmail } },
        },
        update: { quantity: { increment: 1 } },
        include: { product: true },
      });

      if (!cart.product) {
        // If the product relation is empty, create a new product
        const product = await ctx.prisma.product.create({
          data: { skuid: input.skuid, cart: { connect: { id: cart.id } } },
        });

        cart.product = [product];
      } else {
        // If the product relation already exists, add a new product to it
        const product = await ctx.prisma.product.create({
          data: { skuid: input.skuid, cart: { connect: { id: cart.id } } },
        });

        cart.product.push(product);
      }

      return cart;
    }),

  deleteItem: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.cart.delete({
        where: { ...input },
      });
    }),

  deleteAllInCart: publicProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.cart.deleteMany({
        where: { userId: input.userId },
      });
    }),
});
