import express from "express";
import * as main from "../controllers/main.js"

const routes = express.Router();

routes.get("/", main.sendIndex);

export default routes;
