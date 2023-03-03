import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Checkout(req, res) {

    try {

        const { name, email, mobileNumber, address, state, city, zipCode, paymentType } = req.body;
        const cartItem = await prisma.order.create({
            data: {
                name: name,
                email: email,
                mobile_number: mobileNumber,
                address: address,
                state: state,
                city: city,
                zipcode: zipCode,
                userId: 'clepw47si0000dx6oasus5p0j',
                status: 'pending',
                paymentType: paymentType

            },
        });
        
        res.json(200, cartItem);
    } catch (error) {
        console.log(error)

        res.status(400).json({ message: error.message });
    }

}

