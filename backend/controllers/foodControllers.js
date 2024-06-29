import foodModel from "../models/foodModel.js";
import fs from "fs";
import path from 'path';
//add food item

const addFood = async (req, res) => {
  const food = new foodModel({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.file.filename,
    category: req.body.category,
  });
  try {
    await food.save();
    res.status(201).json({ success: true, message: "Food item added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

//update food
const updateFood = async (req, res) => {
  
};
//delete food
const deleteFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    const imagePath = path.join('uploads', food.image);

    fs.unlink(imagePath, async (err) => {
      if (err) {
        console.error("Error deleting image:", err);
        return res.status(500).json({ success: false, message: "Error deleting image" });
      }
      // console.log("Image deleted");

      await foodModel.findByIdAndDelete(req.body.id);
      res.status(201).json({ success: true, message: "Food item deleted successfully" });
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};


//get food
const getFood = async (req, res) => {};
//get all food
const getAllFood = async (req, res) => {
  try {
    const allFood = await foodModel.find({});
    res.status(201).json({success:true,data:allFood});
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "something went wrong in fetching the food data" });
  }
};

export { addFood, updateFood, deleteFood, getFood, getAllFood };
