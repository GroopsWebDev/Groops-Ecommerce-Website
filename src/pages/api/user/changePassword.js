import { NextApiHandler } from "next";
import bcrypt from "bcryptjs";
import { prisma } from "../../../server/db/client";

async function ChangePassword(req, res) {
  try {
    const { currentPassword, newPassword, id } = req.body;
    const user = await prisma.user.findFirst({
      where: {
        email: id,
      },
    });

    const check = bcrypt.compareSync(currentPassword, user?.password);
    if (check) {
      const newUser = await prisma.user.update({
        where: {
          email: id,
        },
        data: { password: await bcrypt.hash(newPassword, 10) },
      });
      res.json({ status: 200, message: "password change successfully." });
    } else {
      res.json({ status: 400, message: "old password is invalid" });
    }
  } catch (error) {
    // Send a JSON response with the error message
    res.status(200).json({ message: error.message });
  }
}

export default ChangePassword;
