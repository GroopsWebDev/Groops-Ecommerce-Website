import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from 'next';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient()

async function ChangePassword(req, res) {
    try {
        
        const { oldPassword,newPassword} = req.body;
        
        const newUser = await prisma.user.findFirst({
            where: {
                email :  'an@gmail.com', 
            },
        });

       const check = bcrypt.compareSync(oldPassword,newUser?.password)
     if (check){
        const newUser = await prisma.user.update({
            where: {
                email :  'an@gmail.com', 
            },
            data : {  password :  await bcrypt.hash(newPassword, 10) }
        });
        res.json(200,  'passsword udapte ');

     }else{
        res.json(400,  'old password is not exit');
        
     }


    } catch (error) {
        // Send a JSON response with the error message
        res.status(400).json({ message: error.message });
    }
}

export default ChangePassword;

