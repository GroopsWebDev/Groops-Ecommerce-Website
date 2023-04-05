
// import { NextApiHandler } from 'next';
import { prisma } from "../../../server/db/client";

async function UserSetting(req, res) {
    try {
        
        const { orderId, status }  = req.body;
        
        const newUser = await prisma.order.update({
            where : { orderId : orderId },
            data : {
               status:  status, 
            },
        });

    
        res.json( 200,  "Successfully status update");
    } catch (error) {
        console.log(error)

        // Send a JSON response with the error message
        res.status(400).json({ message: error.message });
    }
}

export default UserSetting;

