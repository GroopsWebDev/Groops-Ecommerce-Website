import { PrismaClient } from "@prisma/client";
import { NextApiHandler } from "next";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function Register(req, res) {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        firstname: firstname,
        lastname: lastname,
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
