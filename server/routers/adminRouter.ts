import Router from "express";
import AdminController from "../controllers/adminController";
const adminRouter = Router ();

adminRouter.post ( "/registration", AdminController.registration );
adminRouter.post ( "/login", AdminController.login );
export default adminRouter;