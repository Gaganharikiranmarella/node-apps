import User from "../models/userModel.js";

export const loginUser = async (req, res) => {
  try {
    const { email, pass } = req.body;
    if (!email || !pass) return res.status(400).json({ message: "Email and pass required" });

    const user = await User.findOne({ email });
    if (user) return res.json({ message: "Account already exists" });

    const newUser = new User({ email, pass });
    await newUser.save();
    res.status(201).json({ message: "Account created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
