import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { incomeController } from "../controllers/transaction/income.controller.js";
import { expenseController } from "../controllers/transaction/expense.controller.js";

const transactionRouter = Router();

transactionRouter.post("/user/expense", authMiddleware, expenseController);
transactionRouter.post("/user/income", authMiddleware, incomeController);

export default transactionRouter;
