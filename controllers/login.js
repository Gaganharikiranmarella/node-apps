import User from "../models/userModel.js";

export default async (req, res) => {
  try {
    const { email, pass } = req.body;

    if (!email || !pass) {
      return res.status(400).json({ error: "Email and password required." });
    }

    const user = await User.findOne({ email, pass });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
