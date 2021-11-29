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
  "name": "https://google.com/",
  "url": "google"
}
```
### CREATE WITH AJAX
``` JavaScript
var url = "https://throw-me.now.sh/api/create/";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "name": "https://google.com/",
  "url": "google"
}`;

xhr.send(data);

```


## get
Send a `post` request to `https://throw-me.now.sh/api/get/`
with body as:
``` json
{
  "name": "theName"
}
```
### GET WITH AJAX
``` JavaScript
var url = "https://throw-me.now.sh/api/get/";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

var data = `{
  "name": "google"
}
`;

xhr.send(data);
```

## Parameters For The Api
- name of the url has a limit of 20 characters
- name of the name has a limit of 200 characters

<a href="https://www.producthunt.com/posts/throw-me?utm_source=badge-review&utm_medium=badge&utm_souce=badge-throw-me#discussion-body" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=321140&theme=light" alt="throw-me - A hassle free URL shortener. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
