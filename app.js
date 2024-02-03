const express = require("express");
const parser = require("body-parser");
const mainRoutes = require("./routes/main");

const app = express();
const port = 8000;

app.use(parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("view engine", "ejs");
app.use("views", "views");

app.use(mainRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
