import { promise, z } from "zod";
import { cuid } from "prisma";

import { router, publicProcedure } from "~/server/api/trpc";
import { generateCode } from "../../../utils/utils";

export const groupRouter = router({
  getAllGroups: publicProcedure.query( async({  }) => {
    return prisma.group.findMany();
  }),

  getById: publicProcedure
    .input(z.object({ groupId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.group.findUnique({
        where: { groupId: input.groupId },
      });
    }),

  createGroup: publicProcedure
    .input(
      z.object({
        userId: z.string(),
        groupName: z.string(),
        groupImg: z.string(),
        endDate: z.date(),
        coOwner:z.array(
          z.object({
          groupCoEmail: z.string(),
          groupCoName: z.string(),
        
        }),
       
        // z.object({

        //   groupId2: z.string(),
        //   groupCoEmail2: z.string().email(),
        //   groupCoName2: z.string(),
        
        // })
         )
      })

    )
    .mutation(async({ ctx, input }) => {
      const groupId = cuid; // Generate groupId using cuid()
       
       ctx.prisma.group.create({
        data: {
          groupId,
          groupMasterId: input.userId,
          groupName: input.groupName,
          groupImg: input.groupImg,
          endDate: input.endDate,

         
          groupCode: generateCode(),
          coOwner: {
            createMany: {
              data: input.coOwner.map((coOwner) => ({
                groupCoEmail: coOwner.groupCoEmail,
                groupCoName: coOwner.groupCoName,
                group_id: groupId,
              })),
            },
          },
        },
      });
  
      return;
    }),
      //   },
      // });
      // input.coOwner.map((i )=> {
      //   i.groupId1= groupId1,
      //   i.groupCoEmail =groupCoEmail,
      //   i.groupCoName = groupCoName,
      //   // i.groupId2 = groupId2,
      //   // i.groupCoEmail = groupCoEmail,
      //   // i.groupCoName = groupCoName,
      // })
      // ctx.prisma.coOwner.create({
      //   data: input.coOwner
      // })
      // return ;
      // await promise.all(
      // input.coOwner.map((coOwner) => {
      //   ctx.prisma.coOwner.create({
      //     data: {
      //       groupCoEmail: coOwner.groupCoEmail,
      //       groupCoName: coOwner.groupCoName,
      //       group_id: groupId,

      //     },
      //   });
      // })
      // );
    //   return;


    // }),

  deleteGroup: publicProcedure
    .input(z.object({ groupId: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.group.delete({
        where: { groupId: input.groupId },
      });
    }),
});
