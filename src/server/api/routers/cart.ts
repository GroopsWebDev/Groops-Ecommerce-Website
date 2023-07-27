import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const ShoppingCartRouter = createTRPCRouter({
  getUserCartItems: publicProcedure
  .input(z.object({ user_Clerk_id: z.string() }))
  .query(({ ctx, input }) => {
    return ctx.prisma.cart.findMany({
      where: { user_Clerk_id: input.user_Clerk_id },
      include: {
        product: true, // Include the associated product
      },
    });
  }),

  addCartItem: publicProcedure
    .input(
      z.object({
        user_Clerk_id: z.string(),
        product_id: z.string(),
        quantity: z.number().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      //check if the product exists
      const { user_Clerk_id, product_id } = input;
      // Check if a matching cart item already exists
      const existingCartItem = await ctx.prisma.cart.findUnique({
        where: {
          user_Clerk_id_product_id: {
            user_Clerk_id,
            product_id,
          },
        },
      });
      if (existingCartItem) {
        // If the matching cart item exists, increment the quantity by 1
        const updatedCartItem = await ctx.prisma.cart.update({
          where: { id: existingCartItem.id },
          data: { quantity: existingCartItem.quantity + 1 },
        });
        return updatedCartItem;
      } else {
        // If the matching cart item doesn't exist, create a new cart item with quantity 1
        const newCartItem = await ctx.prisma.cart.create({
          data: {
            quantity: 1,
            user_Clerk_id,
            product: { connect: { skuid: product_id } },
          },
        });
        return newCartItem;
      }
    }),

  reduceCartItem: publicProcedure
    .input(
      z.object({
        user_Clerk_id: z.string(),
        product_id: z.string(),
        remove_item: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      //check if the product exists
      const { user_Clerk_id, product_id, remove_item } = input;
      // Check if a matching cart item already exists
      const existingCartItem = await ctx.prisma.cart.findUnique({
        where: {
          user_Clerk_id_product_id: {
            user_Clerk_id,
            product_id,
          },
        },
      });

      if (!existingCartItem) {
        throw new Error("Cart item not found");
      }

      if (remove_item) {
        await ctx.prisma.cart.delete({ where: { id: existingCartItem.id } });
        return null;
      } else {
        if (existingCartItem.quantity > 1) {
          const updatedCartItem = await ctx.prisma.cart.update({
            where: { id: existingCartItem.id },
            data: { quantity: existingCartItem.quantity - 1 },
          });
          return updatedCartItem.quantity > 0 ? updatedCartItem : null;
        } else {
          // If reduceQuantity is true and quantity is 1, remove the cart item
          await ctx.prisma.cart.delete({ where: { id: existingCartItem.id } });
          return null;
        }
      }
    }),

    emptyCart: publicProcedure
    .input(
      z.object({
        user_Clerk_id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { user_Clerk_id } = input;
      // Check if a matching cart item already exists
      const existingCartItems = await ctx.prisma.cart.findMany({
        where: {
          user_Clerk_id: user_Clerk_id,
        },
      });
      if (!existingCartItems) {
        throw new Error("Cart item not found");
      }
      await ctx.prisma.cart.deleteMany({ where: { user_Clerk_id: user_Clerk_id } });
      return null;
    }
    ),

});
