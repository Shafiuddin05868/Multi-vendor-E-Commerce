import { Router } from "express";
import authControllers from "../controllers/authControllers";
import { authMiddleware } from "../middlewares/authMiddleware";

const authRouter = Router();


//admin login
authRouter.post("/auth/admin-login", authControllers.admin_login);
authRouter.get("/get-user", authMiddleware, authControllers.getUser);

export default authRouter;