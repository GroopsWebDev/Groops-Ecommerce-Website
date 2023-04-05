// import { NextApiHandler } from 'next';
import { prisma } from "../../../../server/db/client";

async function UserSetting(req, res) {
  try {
    const newUser = await prisma.user.update({
      where: { id: req.body.userId },
      data: {
        // firstname: req.body.firstname,
        // lastname: req.body.lastname,
        name: req.body.name,
        image: req.body.image,
        address: req.body.address,
        postCode: req.body.postCode,
        phone: parseInt(req.body.phoneNumber),
      },
    });

    res.json({ status: 200, message: "Profile Update Successfully." });
  } catch (error) {
    // Send a JSON response with the error message
    res.status(200).json({ message: error.message, status: 400 });
  }
}

export default UserSetting;
