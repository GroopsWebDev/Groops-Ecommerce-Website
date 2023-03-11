import { NextApiHandler } from "next";
import bcrypt from "bcryptjs";

import { prisma } from "../../../server/db/client";

async function Register(req, res) {
  try {
    const { fullname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    //    const await prisma.user.create({

    const newUser = await prisma.user.create({
      data: {
        name: fullname,
        email: email,
        password: hashedPassword,
        phone: null,
        username: null,
        postCode: null,
      },
    });

    res.json({ status: 200, message: "success" });
  } catch (error) {
    // Send a JSON response with the error message
    res.status(400).json({ message: error.message });
  }
}

export default Register;
