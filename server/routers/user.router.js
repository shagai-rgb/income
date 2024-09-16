import { Router } from "express";
import {
  loginController,
  signUpController,
} from "../controllers/users/index.js";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);

export default userRouter;
