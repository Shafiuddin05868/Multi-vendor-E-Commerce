import { Router } from "express";
import authControllers from "../controllers/authControllers";

const authRouter = Router();


//admin login
authRouter.post("/auth/admin-login", authControllers.admin_login)

export default authRouter;