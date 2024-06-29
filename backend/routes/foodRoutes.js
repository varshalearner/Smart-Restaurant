import { addFood, getAllFood,deleteFood} from "../controllers/foodControllers.js";
import express from "express";
import multer from "multer"; // image storage
const foodRouter = express.Router();


// img storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });


foodRouter.post("/add",upload.single("image") , addFood);
foodRouter.get("/getAll", getAllFood);
foodRouter.delete("/delete", deleteFood);
// foodRouter.get("/get", getFood);
// foodRouter.put("/update/:id", updateFood);



export default foodRouter;