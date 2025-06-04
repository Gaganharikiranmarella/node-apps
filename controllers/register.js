import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { name, username, email, pass } = req.body;

    if (!email || !pass) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Account already exists." });
    }

    const user = new User({ name, username, email, pass });
    const result = await user.save();

    res.status(201).json({ message: "Account created", user: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
