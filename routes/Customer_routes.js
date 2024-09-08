import express from "express";
import {AddToCart, Customer, getUserCount, placeOrder} from "../controllers/Customer_controller.js"
import { home } from "../controllers/Customer_controller.js";
import {Customer_profile} from "../controllers/Customer_controller.js"
import { editProfile } from "../controllers/Customer_controller.js";
import { AllCartProduct,buyProduct } from "../controllers/Customer_controller.js";

const Customer_routes = express.Router();

Customer_routes.get("/",home)
Customer_routes.post("/Customer_ragister",Customer)
Customer_routes.get("/Customer_profile",Customer_profile)
Customer_routes.post("/edit_profile",editProfile)
Customer_routes.post("/Cart",AddToCart)
Customer_routes.get("/showCartProduct",AllCartProduct)
Customer_routes.post("/buyProduct",buyProduct)
Customer_routes.get("/placeorder",placeOrder)
Customer_routes.get("/getUserCount",getUserCount)
export default Customer_routes;