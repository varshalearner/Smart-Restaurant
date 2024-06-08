import { addFood, getFood, updateFood, deleteFood } from "../controllers/foodControllers";
import express from "express";
import multer from "multer";
import path from "multer";
const foodRouter = express.Router();

foodRouter.post("/add", addFood);
foodRouter.get("/get", getFood);
foodRouter.put("/update/:id", updateFood);
foodRouter.delete("/delete/:id", deleteFood);

export default foodRouter;