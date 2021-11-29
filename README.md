<p align="center">
  <img src="/public/favicon.ico" />
</p>

# [Throw-Me](https://throw-me.now.sh/)
### A url shortener (pretty straight forward)


[![GitHub issues](https://img.shields.io/github/issues/volcareso/throw-me?style=for-the-badge)](https://github.com/volcareso/throw-me/issues)
[![GitHub stars](https://img.shields.io/github/stars/volcareso/throw-me?style=for-the-badge)](https://github.com/volcareso/throw-me/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/volcareso/throw-me?style=for-the-badge)](https://github.com/volcareso/throw-me/network)
[![GitHub license](https://img.shields.io/github/license/volcareso/throw-me?style=for-the-badge)](https://github.com/volcareso/throw-me)


Made with-
- nextJS
- prisma
- postgresql
- chakra UI

deployed on
- App on vercel
- Database on heroku

# Api
## Create the url in the db
Send a `post` request to `https://throw-me.now.sh/api/create/`
with body as:
``` json
{
  "url": "https://google.com/",
  "name": "google"
}
```

### `Create` with JavaScript ajax

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
  "url": "https://google.com/",
  "name": "google"
}`;

xhr.send(data);

```


---



## Get the url from the db
Send a `post` request to `https://throw-me.now.sh/api/get/`
with body as:
``` json
{
  "name": "theName"
}
```
### `Get` with JavaScript ajax
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
- the url has a limit of 200 characters
- the name has a limit of 20 characters

<a href="https://www.producthunt.com/posts/throw-me?utm_source=badge-review&utm_medium=badge&utm_souce=badge-throw-me#discussion-body" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/review.svg?post_id=321140&theme=light" alt="throw-me - A hassle free URL shortener. | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>
