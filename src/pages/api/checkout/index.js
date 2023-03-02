import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Checkout(req, res) {
      
   try {
      
    const { name, email, mobileNumber, address ,state ,city , zipCode } = req.body;
    const cartItem = await prisma.order.create({
        data: {
            name: name,
            email : email ,
            mobile_number : mobileNumber,
            address : address,
            state : state,
            city :city,
            zipcode : zipCode,
            userId: 'clefhzm50000fhqpooy9gspo6',
             
        },
    });

    res.json( 200,  cartItem);
} catch (error) {
     console.log(error)
     
    res.status(400).json({ message: error.message });
}
  
}

 