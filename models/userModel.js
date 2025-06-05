import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
  phone: String,
  country: Number,
});

const User = mongoose.model("User", userSchema);
export default User;
