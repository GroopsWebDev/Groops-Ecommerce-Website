import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function CartCount(req, res) {
  const cartCount = await prisma.cart.count()
  if (cartCount == 0){
    return  res.json({status:400, cartCount})
  }

  return  res.json({status:200, cartCount})

   

}

 