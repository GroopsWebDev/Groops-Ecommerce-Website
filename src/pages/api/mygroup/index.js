import { prisma } from "../../../server/db/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";


export default async function handler(req, res) {
    try {

        const session = await getServerAuthSession({ req, res });
        if (!session) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const group = await prisma.group.findMany({
            where: {
                groupMasterId :  session.user["id"] 
            }
        });

        res.status(200).json({
            status: 200,
            success: true,
            data: group,
        });
    } catch (e) {
 
        res.json({ status: 500, message: e.message });
    }
}
