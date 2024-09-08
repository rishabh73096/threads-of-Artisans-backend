import express from "express";
import {Customer_login} from "../controllers/Customer_login_controller.js"
import { home } from "../controllers/Customer_login_controller.js";
const Customer_login_routes = express.Router();

Customer_login_routes.get("/",home)
Customer_login_routes.post("/Customer_login",Customer_login)

export default Customer_login_routes;