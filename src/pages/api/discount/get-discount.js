import { prisma } from "../../../server/db/client";

const rate = {2: 0.02, 5: 0.036, 8: 0.052, 15: 0.07, 25: 0.1, 32: 0.13, 50: 0.15, 70: 0.17, 99: 0.2};

export default async function GetDiscount(req, res) {
    try {
        const groupSize = await prisma.groupmember.count({
            where: { groupId: req.body.groupId}
        });

        let discountRate = 0;

        for (const [key, value] of Object.entries(rate)) {
            if (key > groupSize) break;
            discountRate = value;
        }

        await prisma.group.update({
            where: { groupId: req.body.groupId }, 
            data: { finalDiscount: discountRate } 
        });
          
        return res.json({status:200, size: groupSize, discountRate: discountRate});
    
      } catch (error) {
        res.status(200).json({ message: error.message, status: 400 });
      }
}
