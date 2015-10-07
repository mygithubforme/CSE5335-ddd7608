# ruby-getting-started

#Edited Readme.md file

a) What server framework did i choose and why?

I have chosen Ruby on Rails as server framework. Ruby on rails is one of the most popular frameworks to develop the web  applications. It is based on MODEL, VIEW and CONTROLLER paradigm. Browser is directly connected to controller or in other words whenever we send any request for web page it first goes to controller. Then, if there is a requirement for database transaction it will contact model which contains database connection, otherwise it will directly return the web page based on matching routes in routes.rb file. This paradigm is very easy to implement and promotes faster development. 

b) What client framework did i choose and why?

I have chosen JQUERY as client side framework. It is a javascript library which allows you to do same javascript things with much less code than javascript itself. With the help of JQUERY we can easily manipulate things such as animation, dynamically changing content of the web page. It makes it easier to do ajax calls.


c) Which aspect of the implementation did you ind easy, if any, and why?

Doing Ajax call with jquery was easy for me. I have used jquery before, so i was familiar with syntax and few methods for Ajax calls. Therefore, this was comparatively easy task for me.


d) What aspect of the implementation did you find hard, if any, and why?

Setting up and installing Ruby on Rails was realy hard part. Specially, i am using windows systems so there are lots directories which ruby couldn't access. Most of the problem is related to compatibilities. Most of the gems were incompatible with each other. After that, to deploy on Heroku i had to install Jruby. After that Jruby vesrion was incompatible with my ruby version. So, setting and installing ruby on rails was really hard.


e) What components OTHER than your client and server framework did you install, if any, and if so, what is their purpose for your solution?

To use Google Map API, i had to create project on google so that i can get KEY ehich is necessary to access API for Google map. I was able to use google map api on my local machine without key but when deploying on heroku i needed to have KEY. Anotherthing i have installed is heroku toolbelt to connect easily with my heroku account.


f) What Ubuntu commands are required to deploy and run your server?

1) To create application in rails follow command given below.

rails new application-name

2) Deploy rails server

rails server

Now to deploy application on heroku follow commands 

1) got to your root of the application

2) Run: git init

3) Run: git add .

4) Run: git commit -m "message"

5) Run: git push heroku master

6) Run: heroku open (To view application in browser which will be on heroku.)


