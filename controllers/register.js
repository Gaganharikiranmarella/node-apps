import User from "../models/userModel.js";

export default async (req, res) => {
  try {
    const { name, username, email, pass } = req.body;

    if (!email || !pass) {
      return res.status(400).json({ error: "Email and password required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Account already exists." });
    }

    const newUser = new User({ name, username, email, pass });
    const savedUser = await newUser.save();

    res.status(201).json({ message: "Account created", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
