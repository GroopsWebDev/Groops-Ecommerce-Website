import { prisma } from "../../../../server/db/client";
import handlePrismaError from "../../../../utils/prismaExpHanlder";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const {
      phone,
      email,
      description,
      files,
    } = req.body;
  }
}

//should i load the old file and add the new one to this branch?