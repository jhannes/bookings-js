This is a demo project for Angular, Sequelize and ExpressJS.

The system lets users book workers for projects.

Prerequisites:
==============
* [NodeJS](http://nodejs.org)
* [PostgreSQL](http://www.postgresql.org/download/)
* Optional, for Windows: 
  [Growl for Windows](http://growlforwindows.com) and
  [Growlnotify](http://www.growlforwindows.com/gfw/help/growlnotify.aspx)

Running the code:
=================
1. Install NodeJS utilities:
   `npm install --global karma karma-cli bower nodemon mocha`
2. Install NodeJS dependencies: `npm install`
3. Install Bower dependencies: `bower install` (for web site dependencies)
4. Start the test runner for client-side tests: `karma start`
5. Create the database schema for the tests: (pgsql is in PostgreSQL install dir)
   * `echo create user booking with password 'secret' | psql -U postgres`
   * `echo create database booking_test | psql -U postgres`
   * `echo grant all privileges on database booking_test to booking | psql -U postgres`
6. Start the test runner for server-side tests: `mocha`
7. Create the database schema for the server:
   * `echo create database booking_dev | psql -U postgres`
   * `echo grant all privileges on database booking_dev to booking | psql -U postgres`
8. Start the server: `nodemon server/index.js`
9. Open in a web browser: http://localhost:3000

Deploying to Heroku:
====================
1. Make sure you have a Heroku account and you an push to it
   * Create a Heroku account
   * Install [Heroku toolbelt](https://toolbelt.heroku.com/)
2. Create a new Heroku application: `heroku create`
3. Get a database for your app: `heroku addons:add heroku-postgresql:dev`
4. Push your code to Heroku: `git push heroku master`
5. Visit the web site: `heroku open`

Extending the code:
===================
The code currently lets users add and list workers. But the application
is really about projects and bookings.

1. Create a test for an AngularJS ProjectCtrl to create and list projects
2. Create a test for a ExpressJS ProjectService to create and list projects
3. Create the view and verify that it works
4. Extend the Project functionality with delete
5. Extend the Project functionality with edit
6. Using test-driven development, create controllers and service for
   a booking, which associates a worker with a project for a timespan
