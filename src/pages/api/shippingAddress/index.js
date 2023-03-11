import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from 'next';

const prisma = new PrismaClient()

async function CreateCart(req, res) {
    try {

        const { firstName, lastName , address1  , address2 , postalCode , city } = req.body;
 

        const cartItem = await prisma.order.create({
            data: {
                firstName: firstName,
                lastName:  lastName, 
                address1:  address1,
                address2:  address2,
                city:      city,
                zipCode : postalCode
            },
        });

        res.json( 200,  cartItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export default CreateCart;

