import express from "express";
import parser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
import routes from "./routes/main.js"
import * as val from "./util/util.js"

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(parser.urlencoded({ extended: false }));

app.use(express.static(val.staticPath));

app.use(routes);

app.listen(val.port, () => {
  console.log(`Example app listening on port ${val.port}`);
});
