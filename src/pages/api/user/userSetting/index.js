// import { NextApiHandler } from 'next';
import { prisma } from "../../../../server/db/client";

async function UserSetting(req, res) {
  try {
    const newUser = await prisma.user.update({
      where: { id: req.body.userId },
      data: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        image: req.body.image,
        address: req.body.address,
        phone: parseInt(req.body.phoneNumber),
      },
    });

    const order = await prisma.order.update({
      where: { userId: req.body.userId },
      data: {
        paymentType: req.body.paymentType,
      },
    });

    res.json({ status: 200, message: "Profile Update Successfully." });
  } catch (error) {
    // Send a JSON response with the error message
    res.status(400).json({ message: error.message });
  }
}

export default UserSetting;
