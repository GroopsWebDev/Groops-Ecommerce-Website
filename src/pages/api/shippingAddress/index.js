import { prisma } from "../../../server/db/client";
import { NextApiHandler } from 'next';
import handlePrismaError from "../../../utils/prismaExpHanlder";



async function CreateCart(req, res) {
    try {

        const { firstName, lastName, address1, address2, postalCode, city, userId } = req.body;
        const cartItem = await prisma.ShippingAddress.create({
            data: {
                firstName: firstName,
                lastName: lastName,
                address1: address1,
                address2: address2,
                city: city,
                zipCode: postalCode,
                userId: userId
            },
        });
        return res.json({
            status: 200,
            success: true,
            message: "Add shipping address successfully.",
        });
    } catch (e) {
        console.log(e.message)

        const error = handlePrismaError(e);
         return res.json(error);
 
    }
}

export default CreateCart;

