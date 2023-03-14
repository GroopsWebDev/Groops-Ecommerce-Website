import { prisma } from "../../../../server/db/client";
import { NextApiHandler } from "next";
import handlePrismaError from "../../../../utils/prismaExpHanlder";
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session";

async function ShippingAddressCreate(req, res) {
  try {
    const session = await getServerAuthSession({ req, res });
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const {
      firstName,
      lastName,
      address1,
      address2,
      postalCode,
      city,
      isPrimaryAddress,
    } = req.body;
    const cartItem = await prisma.ShippingAddress.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        city: city,
        postalCode: postalCode,
        userId: session.user["id"],
        isPrimaryAddress,
      },
    });
    return res.json({
      status: 200,
      success: true,
      message: "Shipping address create successfully.",
    });
  } catch (e) {
    const error = handlePrismaError(e);
    res.status(400).json({ message: error });
  }
}

export default ShippingAddressCreate;
