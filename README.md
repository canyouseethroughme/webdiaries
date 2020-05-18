# webdiaries
Online web app for your diaries build with ReactJS on the frontend and with NodeJS, ExpressJS, JWT and MySQL in the backend.

## Server side configuration

The server side represents the back-end which is built with Node.js and Express.

In order for the server to run, you need to have installed NodeJS, MySQL and Knex globally.

Steps to follow to setup the project:

Log in into your local MySQL DB, using a CLI or any GUI.
Create a database for the current project.
Navigate to the /server/config/ and duplicate the ```dbcredentials_template.js``` file into ```dbcredentials.js``` and replace the database name, 
the username and password with your credentials.
Open a CLI, navigate to the folder /server/ and run ```npm i```
After all the packages are installed, while still in the server folder, run the following commands, 
in this order: ```npm run migrate:rollback```,  ```npm run migrate:latest``` and finally  ```npm run seed:run```
When all the migrations and seeds completed, you can start the server by running ```npm run start-dev``` and in the 
terminal the message server is listening on port 8899 should appear.
