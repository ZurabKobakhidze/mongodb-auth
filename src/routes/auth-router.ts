import { creteUser } from "../controllers/auth-controller.js";
import express from "express";

const authRouter = express.Router();

authRouter.post("/register", creteUser);

export default authRouter;
