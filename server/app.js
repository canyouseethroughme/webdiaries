const express = require("express");
const cors = require("cors");
const app = express();
const helmet = require("helmet");

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// SETUP THE DATABASE
const { Model } = require("objection");
const Knex = require("knex");
const knexFile = require("./knexfile");

const knex = Knex(knexFile.development);
// Give the knex instance to objection.
Model.knex(knex);

const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // limit each IP to 1000 requests per windowMs
});

// Start the server
const port = 8899;

const server = app.listen(port, (error) => {
  if (error) {
    console.log("error running in express");
  }
  console.log("server is running on port", server.address().port);
});
