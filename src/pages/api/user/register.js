import { PrismaClient } from '@prisma/client'
import { NextApiHandler } from 'next';

const prisma = new PrismaClient()

async function Register(req, res) {
    try {
        
        const { firstname,lastname, email, password } = req.body;
        
        const newUser = await prisma.user.create({
            data: {
               firstname:  firstname, 
               lastname: lastname,
               email: email, 
               password: password,
            },
        });

        res.json( 200,  newUser);
    } catch (error) {
        // Send a JSON response with the error message
        res.status(400).json({ message: error.message });
    }
}

export default Register;

