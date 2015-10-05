# ruby-getting-started

What server framework did i choose and why?

I have chosen Ruby on Rails as server framework. Ruby on rails is one of the most popular frameworks to develop the web  applications. It is based on MODEL, VIEW and CONTROLLER paradigm. Browser is directly connected to controller or in other words whenever we send any request for web page it first goes to controller. Then, if there is a requirement for database transaction it will contact model which contains database connection, otherwise it will directly return the web page based on matching routes in routes.rb file. This paradigm is very easy to implement and promotes faster development. 

What client framework did i choose and why?

I have chosen JQUERY as client side framework. It is a javascript library which allows you to do same javascript things with much less code than javascript itself. With the help of JQUERY we can easily manipulate things such as animation, dynamically changing content of the web page. It makes it easier to do ajax calls.


Which aspect of the implementation did you ind easy, if any, and why?

Doing Ajax call with jquery was easy for me. I have used jquery before, so i was familiar with syntax and few methods for Ajax calls. Therefore, this was comparatively easy task for me.


What aspect of the implementation did you find hard, if any, and why?

Setting up and installing Ruby on Rails was realy hard part. Specially, i am using windows systems so there are lots directories which ruby couldn't access. Most of the problem is related to compatibilities. Most of the gems were incompatible with each other. After that, to deploy on Heroku i had to install Jruby. After that Jruby vesrion was incompatible with my ruby version. So, setting and installing ruby on rails was really hard.


What components OTHER than your client and server framework did you install, if any, and if so, what is their purpose for your solution?

To use Google Map API, i had to create project on google so that i can get KEY ehich is necessary to access API for Google map. I was able to use google map api on my local machine without key but when deploying on heroku i needed to have KEY.


What Ubuntu commands are required to deploy and run your server?


This application support the [Getting Started with Ruby on Heroku](https://devcenter.heroku.com/articles/getting-started-with-ruby) article - check it out.

## Running Locally

Make sure you have Ruby installed.  Also, install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

```sh
$ git clone git@github.com:heroku/ruby-getting-started.git
$ cd ruby-getting-started
$ bundle install
$ bundle exec rake db:create db:migrate
$ foreman start web
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```sh
$ heroku create
$ git push heroku master
$ heroku run rake db:migrate
$ heroku open
```

## Docker

The app can be run and tested using the [Heroku Docker CLI plugin](https://devcenter.heroku.com/articles/introduction-local-development-with-docker).

Make sure the plugin is installed:

    heroku plugins:install heroku-docker

Configure Docker and Docker Compose:

    heroku docker:init

And run the app locally:

    docker-compose up web

The app will now be available on the Docker daemon IP on port 8080.

To work with the local database and do migrations, you can open a shell:

    docker-compose run shell
    bundle exec rake db:migrate

You can also use Docker to release to Heroku:

    heroku create
    heroku docker:release
    heroku open

## Documentation

For more information about using Ruby on Heroku, see these Dev Center articles:

- [Ruby on Heroku](https://devcenter.heroku.com/categories/ruby)

