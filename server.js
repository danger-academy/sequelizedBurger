const express = require('express');
//const bodyParser = require('body-parser');
const mysql = require("mysql");
// Set Handlebars.
const exphbs = require("express-handlebars");
const db = require("./models");
require("dotenv").config();

const app = express();

let PORT = process.env.PORT|| 3000;
// Requiring our models for syncing

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

db.sequelize.sync({ force: true }) .then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT ", PORT);
  });
});
