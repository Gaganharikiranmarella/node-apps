import express from "express";
import Order from "../models/orderModel.js"; // Make sure this path is correct

const router = express.Router();

// GET orders by email
router.get("/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const orders = await Order.find({ email });
    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found for this email" });
    }
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new order
router.post("/", async (req, res) => {
  const { email, items, total } = req.body;

  if (!email || !items || !Array.isArray(items) || items.length === 0 || !total) {
    return res.status(400).json({ error: "Missing or invalid order data" });
  }

  try {
    const newOrder = new Order({ email, items, total });
    await newOrder.save();
    res.status(201).json({ message: "Order placed", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
