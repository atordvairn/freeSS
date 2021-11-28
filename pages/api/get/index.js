import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  } else {

    async function main() {
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(
        await prisma.urls.findUnique({
          where: {
            name: req.body.name
          }
        }))
      res.end("")
    }

    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
  }
}
