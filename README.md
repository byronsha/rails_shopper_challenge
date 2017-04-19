Shopper Challenge
=================
##Instructions

1. bundle install
2. npm install
3. rails s
4. webpack --watch
5. visit localhost:3000

##Additional technologies used

- React, React Router
- webpack
- jbuilder

##Notes

I decided to implement this app using microservices architecture instead of using Rails view templates.

The Rails application is for serving a RESTful API that returns JSON, and the frontend is
a React application that communicates with the Rails API and renders data to the client.

You may visit the following URLs to test the API:

- localhost:3000/applicants/1 (GET not currently used, but left for testing)
- localhost:3000/funnels


