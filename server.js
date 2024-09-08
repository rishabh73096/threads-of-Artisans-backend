import express from "express";
import dotenv from "dotenv";
import common_routes from "./routes/common_routes.js";
import admin_routes from "./routes/admin_routes.js";
import cors from "cors";
import shopkeeper_routes from "./routes/shopkeeper_routes.js";
import connnetDB from "./database/db.js";
import shopkeeper_login_routes from "./routes/shopkeeper_login_routes.js"
import Customer_routes from "./routes/Customer_routes.js";
import Customer_login_routes from "./routes/Customer_login_routes.js";

const serverapp = express();
dotenv.config(dotenv);
serverapp.use(cors());

// json converted in json formet
serverapp.use(express.json());

// urlencoded use remove search bar space in website
serverapp.use(express.urlencoded());

// import here serve static content
serverapp.use(express.static("public"));


serverapp.use("/", common_routes);
serverapp.use("/admin", admin_routes);
serverapp.use("/shopkeeper",shopkeeper_routes)
serverapp.use("/login",shopkeeper_login_routes)
serverapp.use("/Customer",Customer_routes)
serverapp.use("/CustomerLogin",Customer_login_routes)
connnetDB()

const PORT = process.env.PORT || 3200;
serverapp.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
