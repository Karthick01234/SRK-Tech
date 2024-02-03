const express = require("express");
const parser = require("body-parser");
const mainRoutes = require("./routes/main");
const path = require("path");

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
