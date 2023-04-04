import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Checkout(req, res) {
      
   try {
      
    const { product_id, quantity } = req.body;
    const cartItem = await prisma.cart.create({
        data: {
            productId: product_id,
            userId: 'clefhzm50000fhqpooy9gspo6',
            qty: quantity
        },
    });

    res.json( 200,  cartItem);
} catch (error) {
    res.status(400).json({ message: error.message });
}
  
}

 