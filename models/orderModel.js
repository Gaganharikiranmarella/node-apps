import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  email: { type: String, required: true },
  items: [
    {
      name: String,
      price: Number,
      qty: Number
    }
  ],
  total: { type: Number, required: true }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
