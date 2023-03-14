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
        where: { groupId: groupId },
        include: {
          user: true,
        },
      });
      const discountPer = discountApplied / 100;
      order.map((i) => {
        i["discountAmount"] = i.total * discountPer;
      });

      const refund = await stripe.refunds.create({
        payment_intent: "pi_3MlRQCI3CTiTs4Jq14esCFTj",
        amount: 1,
      });
      const refundId = refund.id;
      const refundedAmount = refund.amount;
      const currency = refund.currency;
      await prisma.groupMember.deleteMany({ where: { groupId: groupId } });
      await prisma.group.delete({ where: { groupId: groupId } });
      res.status(200).json({
        refundId,
        refundedAmount,
        currency,
        status: 200,
        message: "Discount initiated",
      });
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
