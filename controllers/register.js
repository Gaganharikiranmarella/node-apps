import User from "../models/userModel.js";

export default async function register(req, res) {
  try {
    const { name, username, email, pass } = req.body;

    // Check for email and pass (not password)
    if (!email || !pass) {
      return res.status(400).json({ error: "Email and password required." });
    }

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(409).json({ error: "Account already exists." });
    }

    // Create user using pass, not password
    const newUser = new User({ name, username, email, pass });
    const saved = await newUser.save();

    res.status(201).json({ message: "Account created", user: saved });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: err.message });
  }
}
