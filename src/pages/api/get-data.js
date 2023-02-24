import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function GetData(req, res) {
  
  const product = await prisma.product.findMany()
  return  res.json(product)

}


// export const getServerSideProps = async (context) => {
//   const res = await fetch('http://localhost:3000/api/get-data')
//   const data = await res.json()
//   return data;
// }