import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function GetCartData(req, res) {

   try {
      const data=   await prisma.cart.findMany({
         include: {
            product: true,
         },
   
      });
   
       return res.status(200).json( data )  
   } catch (error) {
      res.status(400).json({ message: error.message });
  }
    

}

