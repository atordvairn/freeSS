![icon](/public/favicon.ico)
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



<a href="https://www.producthunt.com/posts/throw-me?utm_source=badge-review&utm_medium=badge&utm_souce=badge-throw-me#discussion-body" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=321140&theme=light" alt="throw-me - A hassle free URL shortener. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
