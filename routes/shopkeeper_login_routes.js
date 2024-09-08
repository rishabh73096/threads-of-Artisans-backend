import express from "express";
import {login} from "../controllers/shopkeeperLogin_controller.js"
import { home } from "../controllers/shopkeeper_controller.js";
const shopkeeper_login_routes = express.Router();

shopkeeper_login_routes.get("/",home)
shopkeeper_login_routes.post("/Shopkeeperlogin",login)

export default shopkeeper_login_routes;