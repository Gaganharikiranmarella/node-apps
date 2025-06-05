import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  country: String,
  pass: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
