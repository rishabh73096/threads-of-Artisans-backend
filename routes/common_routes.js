import express from "express";
import { home,addfeedback, addcontact, Announcement, AllProductDetails,StateWiseShopkeeper } from "../controllers/common_controller.js";

const common_routes=express.Router()
common_routes.get("/",home);
common_routes.post("/addfeedback",addfeedback);
common_routes.post("/addcontact",addcontact)
common_routes.get("/Eventsdetails",Announcement)
common_routes.get("/allproductdetails",AllProductDetails)
common_routes.get("/allShopkeeperdetails",StateWiseShopkeeper)
export default common_routes;