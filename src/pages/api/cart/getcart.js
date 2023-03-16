import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import { prisma } from "../../../server/db/client";

export default async function GetCartData(req, res) {
  const session = await getServerAuthSession({ req, res });
  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const data = await prisma.cart.findMany({
      where: { userId: session.user["id"] },
      include: {
        product: true,
      },
    });

    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
