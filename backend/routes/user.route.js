import express from "express";

import { loginUser } from "../controllers/userController/login.controller.js";
import { registerUser } from "../controllers/userController/register.controller.js";
import { adminLogin } from "../controllers/userController/adminLogin.controller.js";

const userRouter = express.Router();

userRouter.post("/user/register", registerUser);
userRouter.post("/user/login", loginUser);
userRouter.post("/admin/login", adminLogin);

export default userRouter;
