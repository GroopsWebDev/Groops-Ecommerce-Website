import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function CartCount(req, res) {
  const cartCount = await prisma.cart.count()
  if (cartCount == 0){
    return  res.json(400, cartCount)
  }

  return  res.json(200, cartCount)

   

}

 