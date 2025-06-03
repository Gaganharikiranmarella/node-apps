import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

// GET /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/products (optional - if you want to add products)
router.post("/", async (req, res) => {
  try {
    const { name, price, qty } = req.body;
    const product = new Product({ name, price, qty });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
