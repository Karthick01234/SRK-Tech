const express = require("express");
const home = require("../controllers/main/index");
const routes = express.Router();

routes.get("/", home.sendHome);

module.exports = routes;
