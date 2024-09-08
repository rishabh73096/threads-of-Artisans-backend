import express from "express";
import { AllContacts, AllFeedback, home, login } from "../controllers/admin_controller.js";
import { EventsDetails } from "../controllers/admin_controller.js";
import { getTotalContactCount, getTotalFeedbackCount } from "../controllers/Customer_controller.js";
const admin_routes = express.Router();

admin_routes.get("/", home);
admin_routes.post("/login", login);
admin_routes.post("/EventsDetail", EventsDetails);
admin_routes.get("/allFeedback",AllFeedback)
admin_routes.get("/allContact",AllContacts)
admin_routes.get("/getTotalContactCount",getTotalContactCount)
admin_routes.get("/getTotalFeedbackCount",getTotalFeedbackCount)
export default admin_routes;
