// userModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  username: { type: String, required: false },
  email: { type: String, required: true },
  pass: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);
export default User;
