# webdiaries

Online web app for your diaries build with ReactJS on the frontend and with NodeJS, ExpressJS and JWT in the backend, using a MySQL database.

## Server configuration

The server side represents the back-end which is built with Node.js and Express.

In order for the server to run, you need to have installed NodeJS, MySQL and Knex globally.

Steps to follow to setup the project:

1. Log in into your local MySQL DB, using a CLI or any GUI.
2. Create a database for the current project.
3. Navigate to the /server/config/ and duplicate the `dbcredentials_template.js` file into `dbcredentials.js` and replace the database name,
   the username and password with your credentials.
4. Open a CLI, navigate to the folder /server/ and run `npm i`
5. After all the packages are installed, while still in the server folder, run the following commands,
   in this order: `npm run m:rollback`, `npm run m:latest` and finally `npm run s:run`
6. When all the migrations and seeds completed, you can start the server by running `npm run start-dev` and in the
   terminal the message `server is running on port 8899 should appear`.
