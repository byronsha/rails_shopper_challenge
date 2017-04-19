Shopper Challenge
=================
## Instructions

1. bundle install
2. npm install
3. rails s
4. webpack --watch
5. visit localhost:3000

## Additional technologies used

- React, React Router
- webpack
- jbuilder

## Notes

I decided to implement this app using microservices architecture instead of using Rails view templates.

The Rails application is for serving a RESTful API that returns JSON, and the frontend is
a React application that communicates with the Rails API and renders data to the client.

You may visit the following URLs to test the API:

- localhost:3000/applicants/1 (GET not currently used, but left for testing)
- localhost:3000/funnels

## Todo

- Form validation (React inputs are already set up with onchange handlers. I would just need to make validations inside of those handlers, and render messages.)
- Update funnel query groups weeks from Monday-Sunday instead of Sunday-Saturday
- Render funnel data with d3, Highcharts, etc. (I ran out of time and used HTML elements instead for now)
- Design, responsiveness for smaller devices
- Refactor code - separate any possible stateless functional components