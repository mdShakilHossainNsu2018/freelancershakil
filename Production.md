# **_For update production:_**
commit all
push
npm run build
push to heroku origin

`git init

git add -A

git commit -m 'deploy'

npm run build

git push heroku master`


# **_For first production:_**

Heroku
Install Heroku CLI

Create a static.json file:

{
  "root": "dist",
  "clean_urls": true,
  "routes": {
    "/**": "index.html"
  }
}


Add static.json file to git\
git add static.json\
git commit -m "add static configuration"\
Deploy to Heroku\
heroku login\
heroku create\
heroku buildpacks:add heroku/nodejs\
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static\
git push heroku master