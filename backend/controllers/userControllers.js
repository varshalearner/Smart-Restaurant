import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";

// Token create karne ka function
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// User login ka function
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // User ko email se find 
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User does not exist" });
    }

    // Password ko compare 
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // Agar sab kuch sahi hai to token return 
    res.status(200).json({ success: true, token: createToken(user._id) });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// User register karne ka function
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Pehle check karo ki user already exist karta hai ya nahi
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Email valid hai ya nahi check
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    // Password ki length check
    if (password.length < 6) {
      return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
    }

    // Password ko hash 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // new user create 
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Token generate 
    const token = createToken(newUser._id);
    res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { loginUser, registerUser };
