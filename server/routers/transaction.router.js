import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import { incomeController } from "../controllers/transaction/income.controller.js";
import { expenseController } from "../controllers/transaction/expense.controller.js";
import { totalIncomeController } from "../controllers/transaction/totalIncome.controller.js";
import { totalExpenseController } from "../controllers/transaction/totalexpense.controller.js";
import { recordsController } from "../controllers/transaction/records.controller.js";

const transactionRouter = Router();

transactionRouter.post("/user/expense", authMiddleware, expenseController);
transactionRouter.post("/user/income", authMiddleware, incomeController);
transactionRouter.get(
  "/user/totalincome",
  authMiddleware,
  totalIncomeController
);
transactionRouter.get(
  "/user/totalexpense",
  authMiddleware,
  totalExpenseController
);

transactionRouter.get("/user/records", authMiddleware, recordsController);

export default transactionRouter;
