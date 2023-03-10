import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function GetDataById(req, res) {
  let { userId } = req.query.id;  
  const user = await prisma.user.findFirst({where:{id: userId  }})
  return  res.json(user)

}