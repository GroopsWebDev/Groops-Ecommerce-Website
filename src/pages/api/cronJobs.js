import { prisma } from "../../server/db/client";
import Stripe from "stripe";
import moment from "moment";
import { getAccessToken } from "../api/group/paypal"
import { refundAmount } from "../api/group/paypal"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});
export default async function handler(req, res) {
  const orders = await prisma.order.findMany({
    where: {
      paymentIntent: {
        not: null,
      },
      groupId: {
        not: null,
      },
      group: {
        endDate: {
          lt: new Date(),
        },
      },
    },
    include: {
      group: {
        include: {
          groupMember: true,
        },
      },
    },
  });

  const discountRate = await prisma.discountRate.findMany();

  //   const refundPromises = orders.map((i) => {
  //     const memeberCount = i.group.groupMasterId?.length;
  //     const discountAMt = getAppliedDiscount(discountRate, memeberCount);

  //   });
  let groupIds = [];
  let refundPromises = [];
  orders.map((i) => {
    const memeberCount = i.group.groupMasterId?.length;
    const discountPer = getAppliedDiscount(discountRate, memeberCount);
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
    let groupId = i.groupId;
    groupIds.push(groupId);
    if (discountAMt > 0) {
      refundPromises.push(
        // stripe.refunds.create({
        //   payment_intent: paymentId,
        //   amount: discountAMt,
        // })
        getAccessToken().then(data => {
          refundAmount(paymentId,discountAMt,data)
        }).catch(err => {
            console.log(err);
        })
      );
    }
  });

  try {
    const result = Promise.all(refundPromises);
    // delete group after refund proceed.
    await prisma.groupMember.deleteMany({
      where: { groupId: { in: groupIds } },
    });
    await prisma.group.deleteMany({ where: { groupId: { in: groupIds } } });
    return res.status(200).json({
      status: 200,
      message: "Discount initiated",
    });
  } catch (e) {
    console.log(e);
    return res.json({ status: 400, message: "Discount Not Initiated." });
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
