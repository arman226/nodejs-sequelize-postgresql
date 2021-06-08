require("dotenv").config();
const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const { authenticateDatabase } = require("./src/data/index");

//TODO: transfer to new file

const app = express();

authenticateDatabase();

app.get("/", (req, res) => {
  res.send("INDEX");
});

app.use("/gigs", require("./src/routes/gigs.routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));
