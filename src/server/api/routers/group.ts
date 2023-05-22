import { z } from "zod";
import { generateCode } from "../../../utils/utils";
import { router, publicProcedure, protectedProcedure } from "../trpc";
import { v4 as uuidv4 } from "uuid";
export const groupRouter = router({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.group.findMany({
      where: {
        endDate: {
          gt: new Date(),
        },
        groupName: {
          not: "",
        },
      },
    });
  }),
  getAllNoAuth: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.group.findMany({
      where: {
        endDate: {
          gt: new Date(),
        },
        groupName: {
          not: "",
        },
      },
    });
  }),
  topGroup: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.group.findMany({
      take: 5,
      where: {
        endDate: {
          gt: new Date(),
        },
        groupName: {
          not: "",
        },
        // isActive: true,
      },
    });
  }),
  getById: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.group.findUnique({
        where: {
          groupId: input.id,
        },
        // include: {
        //   groupMember: {
        //     include: {
        //       user: true,
        //     },
        //   },
        // },
      });
    }),
  createGroup: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        groupName: z.string(),
        endDate: z.string(),
        groupImg: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userId, groupName, endDate, groupImg } = input;

      const user = await ctx.prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        throw new Error("User not found");
      }

      const existingGroup = await ctx.prisma.group.findFirst({
        where: {
          groupMasterId: userId,
          endDate: {
            gte: new Date(),
          },
          groupName: {
            not: "",
          },
        },
      });

      if (existingGroup) {
        throw new Error(
          "You can't create another group before the current group ends!\nOne member can only have one group at a time."
        );
      }

      const cart = await ctx.prisma.cart.findMany({
        where: { userId },
        // include: { product: true },
      });
      const shouldJoin = 40;
      // const totalCartPrice = cart.reduce(
      //   (a, c) => a + c.product.price * c.qty,
      //   0
      // );
      const totalCartPrice = 40;
      if (totalCartPrice < shouldJoin) {
        throw new Error(
          "You total purchase (pretax) must be greater than $40 to continue"
        );
      }

      const existing = await ctx.prisma.group.findFirst({
        where: { groupName },
      });

      if (existing) {
        throw new Error("Group already exists. Choose a different group name");
      }

      const group = await ctx.prisma.group.create({
        data: {
          // groupMaster: { connect: { id: userId } },
          groupMasterId: userId,
          groupId: uuidv4(),
          groupName,
          groupImg,
          endDate,
          groupCode: generateCode(),
        },
      });

      return { group, message: "Group Create Successfully." };
    }),
  joinGroup: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        groupId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { userId, groupId } = input;
      const existingGroup = await ctx.prisma.group.findFirst({
        where: {
          groupMasterId: userId,
          endDate: {
            gte: new Date(),
          },
          groupName: {
            not: "",
          },
        },
      });
      if (existingGroup) {
        return {
          status: 400,
          message:
            "You can't join a group until your created the group is ended.",
        };
      }
      // const existing = ctx.prisma.groupMember.findFirst({
      //   where: {
      //     groupId: groupId,
      //     userId: userId,
      //   },
      // });

      // if (existing) {
      //   return {
      //     status: 200,
      //     group: { groupId },
      //   };
      // }

      const cart = await ctx.prisma.cart.findMany({
        where: { userId },
        // include: { product: true },
      });
      // const totalCartPrice = cart.reduce(
      //   (a, c) => a + c.product.price * c.qty,
      //   0
      // );
      const totalCartPrice = 30;
      if (totalCartPrice >= 30) {
        // const group = await prisma.groupMember.create({
        //   data: {
        //     groupId: groupId,
        //     userId: userId,
        //   },
        // });
        return {
          status: 200,
          group: { groupId },
          message: "Group Join Successfully.",
        };
      } else {
        return {
          status: 400,
          message: "Cart item price must be grether then $30.",
        };
      }
    }),
});

// import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// export const groupRouter = createTRPCRouter({

//   getAllGroups: publicProcedure
//     .query(({ ctx }) => {
//       return ctx.prisma.group.findMany();
//     }),

//   getById: publicProcedure
//     .input(z.object({ groupId: z.string() }))
//     .query(({ ctx, input }) => {
//       return ctx.prisma.group.findUnique({
//         where: { groupId: input.groupId }
//       })
//     })

// });
