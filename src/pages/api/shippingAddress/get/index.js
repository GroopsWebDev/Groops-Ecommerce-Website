import { getServerAuthSession } from "../../../../server/common/get-server-auth-session";
import { prisma } from "../../../../server/db/client";

export default async function GetShippingAddress(req, res) {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const data = await prisma.ShippingAddress.findMany({
      where: { userId: session.user["id"] },
    });
    if (data.length > 0) {
      return res.json({
        status: 200,
        success: true,
        address: data,
      });
    } else {
      return res.json({ status: 400, message: "User Address Not Found." });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
