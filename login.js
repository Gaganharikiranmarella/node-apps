import express from "express";
import User from "./userModel.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, pass } = req.body;

  if (!email || !pass) {
    return res.status(400).json({ error: "Email and pass are required." });
  }

  const existing = await User.findOne({ email, pass });
  if (existing) return res.send("Account already exists");

  try {
    await User.create({ email, pass, name: "", username: "" });
    res.send("Account created");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
