import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function GetDataById(req, res) {
  const id = req.query.id
  const product = await prisma.product.findFirst({where:{skuid:id}})
  return  res.json(product)

}

 