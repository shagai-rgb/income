import express from "express";
import cors from "cors";
import env from "dotenv";
import userRouter from "./routers/user.router.js";
import categoryRouter from "./routers/category.router.js";
import transactionRouter from "./routers/transaction.router.js";

env.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/", userRouter);
app.use("/", categoryRouter);
app.use("/", transactionRouter);

app.listen(port, console.log(`http:localhost${port}`));
