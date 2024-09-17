import { Router } from "express";
import {
  categoryController,
  categoryGetController,
} from "../controllers/category/index.js";

const categoryRouter = Router();

categoryRouter
  .route("/category")
  .post(categoryController)
  .get(categoryGetController);

export default categoryRouter;
