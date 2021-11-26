// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default function handler({ query: { data } }, res) {
  async function main() {
    const user = await prisma.urls.findUnique({
      where: {
        name: data
      },
    })
    
    

    res.status(200).json(user)
  }

  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
