import express from "express";
import User from "./userModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, username, email, pass } = req.body;
  try {
    const newUser = await User.create({ name, username, email, pass });
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;