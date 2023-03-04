import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function GetDataById(req, res) {
   
  const userId= "cleqrqmkc0002hqjwcaawad5k";  
  const user = await prisma.user.findFirst({where:{id: userId  }})
  return  res.json(user)

}

 