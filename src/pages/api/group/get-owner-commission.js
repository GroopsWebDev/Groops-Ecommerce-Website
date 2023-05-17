import { prisma } from "../../../server/db/client";

export default async function GetOwnerCommision(req, res) {
    try {
        const groupSize = await prisma.groupmember.count({
            where: { groupId: req.body.groupId}
        });

        let commission = 0;

        for (let i = 1; i <= groupSize; i++) {
            if (i % 2 == 1) commission += 2.5;
            else commission += 1;
        }

        await prisma.group.update({
            where: { groupId: req.body.groupId }, 
            data: { owner_commission: commission} 
        });
          
        return res.json({status:200, size: groupSize, owner_commission: commission});
    
      } catch (error) {
        res.status(200).json({ message: error.message, status: 400 });
      }
}
