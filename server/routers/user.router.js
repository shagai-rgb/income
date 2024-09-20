import { Router } from "express";
import {
  loginController,
  signUpController,
  userWallet,
} from "../controllers/users/index.js";

const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
userRouter.route("/user").post(userWallet);
export default userRouter;
