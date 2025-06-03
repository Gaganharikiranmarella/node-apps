// productRoutes.js
import express from "express";

const router = express.Router();

// Static product list
const products = [
  { name: "Apple", price: 20, qty: 50 },
  { name: "Mango", price: 25, qty: 40 },
  { name: "Orange", price: 15, qty: 60 },
  { name: "Blueberry", price: 35, qty: 30 },
  { name: "Strawberry", price: 30, qty: 45 },
  { name: "Pineapple", price: 50, qty: 45 },
];

// GET all products
router.get("/", (req, res) => {
  res.json(products);
});

export default router;
