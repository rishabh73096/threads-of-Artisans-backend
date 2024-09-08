import express from "express";
import {Addproduct, Orders, ShopKeeper, ShopKeeper_profile,editProfile} from "../controllers/shopkeeper_controller.js"
import { home } from "../controllers/shopkeeper_controller.js";
import upload_image from "../middlewares/image.multer.middleware.js";

const shopkeeper_routes = express.Router();

shopkeeper_routes.get("/",home)
shopkeeper_routes.post("/ragister",ShopKeeper)
shopkeeper_routes.get("/profile",ShopKeeper_profile)
shopkeeper_routes.post("/edit_profile",editProfile)
shopkeeper_routes.post("/addProduct",upload_image,Addproduct)
shopkeeper_routes.get("/placeorder",Orders)
export default shopkeeper_routes;