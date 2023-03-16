import { prisma } from "../../../server/db/client";
import handlePrismaError from "../../../utils/prismaExpHanlder";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});
export default async function handler(req, res) {
  //   const session = await getServerAuthSession({ req, res });
  //   if (!session) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }
  try {
    if (req.method === "POST") {
      const { groupId } = req.body;
      await prisma.group.update({
        where: { groupId: groupId },
        data: { isActive: false },
      });

      const groupMemberCount = await prisma.groupMember.count({
        where: { groupId: groupId },
      });

      if (groupMemberCount == 0) {
        await prisma.group.delete({ where: { groupId: groupId } });
        return res.json({ message: "Group end successfully", status: 200 });
      }
      const discountRate = await prisma.discountRate.findMany();
      const discountApplied = getAppliedDiscount(
        discountRate,
        groupMemberCount
      );

      const order = await prisma.order.findMany({
        where: { groupId: groupId, paymentIntent: { not: null } },
        include: {
          user: true,
          group: true,
        },
      });
      const discountPer = discountApplied / 100;

      // refund process intited.
      let refundPromises = order.map((i) => {
        let discountAMt = i.total * discountPer;
        let paymentId = i.paymentIntent;
        if (i.group.groupMasterId == i.userId) {
          // group master benefit calc base on groupMember count
          // groupMember count even then add $1 and odd then $2.5.
          let evenBenefit = 1;
          let oddBenefit = 2.5;
          let groupMasterBenefit =
            groupMemberCount % 2 === 0 ? evenBenefit : oddBenefit;
          discountAMt = parseInt(discountAMt) + groupMasterBenefit;
        }
        i["discountAmt"] = discountAMt;
        return stripe.refunds.create({
          payment_intent: paymentId,
          amount: discountAMt,
        });
      });
      try {
        const result = Promise.all(refundPromises);
        // delete group after refund proceed.
        await prisma.groupMember.deleteMany({ where: { groupId: groupId } });
        await prisma.group.delete({ where: { groupId: groupId } });
        res.status(200).json({
          status: 200,
          message: "Discount initiated",
          order,
        });
      } catch (e) {
        res.json({ status: 400, message: "Discount Not Initiated." });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (e) {
    console.error(e);
    return res.json(handlePrismaError(e));
  }
}

function getAppliedDiscount(discountArr, memberCount) {
  let discountRate = 0;
  for (let i = 0; i < discountArr.length; i++) {
    if (memberCount >= discountArr[i].memberCount) {
      discountRate = discountArr[i].discountRate;
    }
  }
  return discountRate;
}
