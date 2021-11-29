import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ log: ['query', 'info'] })
import rateLimit from '../../../utils/rate-limit'

const limiter = rateLimit({
  interval: 60 * 1000,
  uniqueTokenPerInterval: 500,
})

export default async function handler(req, res) {
 try {
    await limiter.check(res, 10, 'CACHE_TOKEN')

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
        res.status(400).send({ message: 'failed', reason: "parameters" })
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




 } catch {
    res.status(429).json({ message: 'Rate limit exceeded' })
  }


}
