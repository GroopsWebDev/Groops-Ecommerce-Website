import { z } from "zod";
import type { address } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";

const addUserDataToAddresses = async (addresses: address[]) => {
  const user_Clerk_id = addresses.map((address) => address.user_Clerk_id);
  const users = await clerkClient.users.getUserList({
    userId: user_Clerk_id,
    limit: 110,
  });

  return addresses.map((address) => {
    const user = users.find((user) => user.id === address.user_Clerk_id);

    if (!user) {
      console.error("USER NOT FOUND", address);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: `USER for address not found. ADDRESS ID: ${address.id}, USER ID: ${address.user_Clerk_id}`,
      });
    }
    return {
      address,
      user: {
        ...user,
        username: user.username ?? "(username not found)",
      },
    };
  });
};

export const addressRouter = createTRPCRouter({
<<<<<<< HEAD

    // getAddressesByUserId: publicProcedure
    // .input(
    //   z.object({
    //     userClerkId: z.string(),
    //   })
    // )
    // .query(({ ctx, input }) =>
    //   ctx.prisma.address
    //     .findMany({
    //       where: {
    //         user_Clerk_id: input.userClerkId,
    //       },
    //       take: 3,
    //       orderBy: [{ createdAt: "desc" }],
    //     })
    //     .then(addUserDataToAddresses)
    // ),
=======
  getAddressesByUserId: publicProcedure
    .input(
      z.object({
        user_Clerk_id: z.string(),
      })
    )
    .query(({ ctx, input }) =>
      ctx.prisma.address
        .findMany({
          where: {
            user_Clerk_id: input.user_Clerk_id,
          },
          take: 3,
          orderBy: [{ createdAt: "desc" }],
        })
        .then(addUserDataToAddresses)
    ),
>>>>>>> 53181c4db376a005e2ddda2a5d6421200c21668d

  createAddress: publicProcedure
    .input(
      z.object({
        is_primary_: z.boolean(),
        street: z.string(),
        city: z.string(),
        state: z.string(),
        country: z.string(),
        first_name: z.string(),
        last_name: z.string(),
        email: z.string(),
        phone: z.number(),
        postal_code: z.string(),
        user_Clerk_id: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.address.create({
        data: {
          is_primary_: input.is_primary_,
          street: input.street,
          city: input.city,
          state: input.state,
          country: input.country,
          first_name: input.first_name,
          last_name: input.last_name,
          email: input.email,
          phone: input.phone,
          postal_code: input.postal_code,
          user_Clerk_id: input.user_Clerk_id,
        },
      });
    }),

  updateAddress: publicProcedure
    .input(
      z.object({
        addressId: z.number(),
        is_primary: z.boolean().optional(),
        street: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        country: z.string().optional(),
        first_name: z.string().optional(),
        last_name: z.string().optional(),
        email: z.string().optional(),
        phone: z.number().optional(),
        postal_code: z.string().optional(),
        user_Clerk_id: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { addressId, ...updateData } = input;
      // Retrieve the existing address record
      const existingAddress = await ctx.prisma.address.findUnique({
        where: {
          id: addressId,
        },
      });
      if (!existingAddress) {
        throw new Error(`Address with ID ${addressId} not found`);
      }
      // Update the address record
      const updatedAddress = await ctx.prisma.address.update({
        where: {
          id: addressId,
        },
        data: updateData,
      });
      return updatedAddress;
    }),

  deleteAddress: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.address.delete({
        where: { ...input },
      });
    }),
});
