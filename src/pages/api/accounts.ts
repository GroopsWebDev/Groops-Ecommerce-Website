import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const accounts = async (req: NextApiRequest, res: NextApiResponse) => {
  const accounts = await prisma.account.findMany();
  res.status(200).json(accounts);
};

export default accounts;