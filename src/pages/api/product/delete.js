import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function ProductDelete(req, res) {

    try {
        const { cartId } = req.body;
         await prisma.cart.delete({
            where: {    
                id: cartId
            },
        })

        res.status(200).json(
            'message', 'delete successfully.'
        );

    } catch (error) {
        res.status(400).json({ message: error.message });
    }




}
