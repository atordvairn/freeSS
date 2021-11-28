import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default function handler(req, res) {
if (req.method !== 'POST') {
  res.status(400).send({ message: 'Only POST requests allowed' })
  return
}else{

  async function main() {
     if(req.body.url.length <= 20 && req.body.url.length >= 3){
       try{
           await prisma.urls.create({
            data: {
              url: req.body.name,
              name: req.body.url
            },
          })
         }catch(e){
              res.setHeader('Content-Type', 'application/json')
              res.status(400).send({ error: e.code })
         }
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send({ message: 'success' })
   }else{
        res.setHeader('Content-Type', 'application/json')
        res.status(400).send({ message: 'failed' })
   }
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
