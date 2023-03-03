
// import { NextApiHandler } from 'next';
import { prisma } from "../../../server/db/client";

async function UserSetting(req, res) {
    try {
        
        const { username, phoneNumber , address , postCode , paymentType }  = req.body;
        
        const newUser = await prisma.user.update({
            where : { id : "cleqrqmkc0002hqjwcaawad5k"  },
            data : {
               username:  username, 
               phone: phoneNumber,
               address: address, 
               postCode: postCode
            },
        });

        const order = await prisma.order.update({
            where : { userId : "cleqrqmkc0002hqjwcaawad5k"  },
            data : {
               paymentType: paymentType
            },
        });

        res.json( 200,  "Successfully profile update");
    } catch (error) {
        console.log(error)

        // Send a JSON response with the error message
        res.status(400).json({ message: error.message });
    }
}

export default UserSetting;

