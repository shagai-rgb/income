import { Router } from "express";
import {
  loginController,
  signUpController,
  userWallet,
} from "../controllers/users/index.js";
import { authMiddleware } from "../middlewares/auth.js";
import { checkWallet } from "../controllers/users/checkWallet.js";
import { checkToken } from "../controllers/users/checkToken.js";
import { testController } from "../controllers/users/test.js";
const userRouter = Router();

userRouter.route("/user/signup").post(signUpController);
userRouter.route("/user/login").post(loginController);
userRouter.post("/user", authMiddleware, userWallet);
userRouter.get("/user/checktoken/:token", checkToken);
userRouter.get("/user/checkwallet", authMiddleware, checkWallet);

userRouter.post("/users/test", testController);

export default userRouter;
