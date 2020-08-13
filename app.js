const path = require("path");
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

const routes = require("./routes/routes.js");

app.use(routes);

app.listen(3000);
