// userRoutes.js
import express from "express";
import User from "./userModel.js";

const router = express.Router();

// Register multiple users
router.post("/register", async (req, res) => {
  try {
    const { users } = req.body;
    if (!Array.isArray(users)) {
      return res.status(400).json({ error: "Expected 'users' array" });
    }

    const result = await User.insertMany(users);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login or create user
router.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;
    if (!email || !pass) {
      return res.status(400).json({ message: "Email and pass required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: "Account already exists" });
    }

    const newUser = new User({ email, pass });
    await newUser.save();
    res.status(201).json({ message: "Account created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
