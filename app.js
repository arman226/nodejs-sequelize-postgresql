require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const { authenticateDatabase } = require("./src/data/index");
const exphbs = require("express-handlebars");

//TODO: transfer to new file

const app = express();

//setup Handle bars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

authenticateDatabase();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, console.log(`server running on port ${PORT}`));
app.use("/gigs", require("./src/routes/gigs.routes"));
app.get("/", (req, res) => {
  res.render("index", { layout: "landing" });
});
