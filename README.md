# [Throw-Me](https://throw-me.now.sh/)
## a url shortener (pretty straight forward)

Made with-
- nextjs
- prisma
- postgresql
- chakra UI

deployed on
- app on vercel
- database on heroku

# api
## create
Send a `post` request to `https://throw-me.now.sh/api/create/`
with body as:
``` json
{
  "url": "the url name",
  "name": "https://google.com/"
}
```



## get
Send a `post` request to `https://throw-me.now.sh/api/get/`
with body as:
``` json
{
  "name": "theNameOfTheUrl"
}
```
