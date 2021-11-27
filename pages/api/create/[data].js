import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default function handler({ query: { data } }, res) {
  async function main() {
    const user = await prisma.urls.create({
      data: {
        name: data.split(/\=/)[0],
        url: data.split(/\=/)[1],
      },
    })

       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json')
       res.end(JSON.stringify(data))
  }

  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
