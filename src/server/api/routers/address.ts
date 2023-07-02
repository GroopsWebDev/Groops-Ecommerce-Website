import { z } from "zod";
import type { address } from "@prisma/client";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";

const addUserDataToAddresses = async (addresses: address[]) => {
  const user_Clerk_id = addresses.map((address) => address.user_Clerk_id);
  const users = (
    await clerkClient.users.getUserList({
      userId: user_Clerk_id,
      limit: 110,
    })
  );

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

  createOrChangeAddress: publicProcedure
    .input(z.object({
      id: z.number(),
      is_primary_: z.boolean(),
      line1: z.string(),
      line2: z.string(),
      city: z.string(),
      state: z.string(),
      country: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      postal_code: z.string(),
      user_Clerk_id: z.string(),
    }))
    .mutation(({ ctx, input }) => {
      const user_Clerk_id = ctx.userId;
      return ctx.prisma.address.upsert({
        where: { id: input.id },
        update: { ...input },
        create: {
          is_primary_: input.is_primary_,
          line1: input.line1,
          line2: input.line2,
          city: input.city,
          state: input.state,
          country: input.country,
          first_name: input.first_name,
          last_name: input.first_name,
          postal_code: input.postal_code,
          user_Clerk_id: user_Clerk_id || '',
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