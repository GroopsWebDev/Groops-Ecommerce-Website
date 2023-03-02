import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function CartQuantity(req, res) {

    try {

        const { cartId, qty } = req.body;
        
        const cartItem = await prisma.cart.update({
            where: { id: cartId },
            data: { qty: qty },
        });

        res.json(200, cartItem);
    } catch (error) {
         

        res.status(400).json({ message: error.message });
    }

}

