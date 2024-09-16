import express from "express";
import cors from "cors";
import env from "dotenv";
import userRouter from "./routers/user.router.js";

env.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", userRouter);

app.listen(port, console.log(`http:localhost${port}`));
