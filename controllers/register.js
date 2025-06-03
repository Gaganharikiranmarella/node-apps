import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    const { users } = req.body;
    if (!Array.isArray(users)) return res.status(400).json({ error: "Expected 'users' array." });

    const result = await User.insertMany(users);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
