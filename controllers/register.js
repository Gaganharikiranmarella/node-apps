import User from "../models/userModel.js";

export default async function register(req, res) {
  try {
    const { name, username, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required." });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ error: "Account already exists." });
    }

    const newUser = new User({ name, username, email, password });
    const saved = await newUser.save();

    res.status(201).json({ message: "Account created", user: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
