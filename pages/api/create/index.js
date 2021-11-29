import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })

export default function handler(req, res) {
if (req.method !== 'POST') {
  res.status(400).send({ message: 'Only POST requests allowed' })
  return
}else{

  async function main() {
     if(req.body.name.length <= 20 && req.body.name.length >= 3){
       try{
           await prisma.urls.create({
            data: {
              url: req.body.url,
              name: req.body.name
            },
          })
          res.setHeader('Content-Type', 'application/json')
          res.status(200).send({ message: 'success' })
         }catch(e){
             if(e.code == 'P2002'){
              res.setHeader('Content-Type', 'application/json')
              res.status(400).send({ message: "The Name Already Exists! Choose A Better Name!" })
             }else{
              res.setHeader('Content-Type', 'application/json')
              res.status(400).send({ message: e.code })
             }
         }
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
