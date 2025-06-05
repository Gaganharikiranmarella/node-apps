
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // NEW

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(8080, () => {
    console.log("🚀 Server started on http://localhost:8080");
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
  process.exit(1);
});

// Test Routes
app.get("/", (req, res) => res.send("Hello World"));
app.get("/greet", (req, res) => res.send("Welcome to the website"));
app.get("/name", (req, res) => res.send("Made by:- Marella Gagan Hari Kiran"));
app.get("/weather", (req, res) => res.json({ temperature: "41°C" }));

// Actual Routes
app.use("/auth", authRoutes);           
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/cart", cartRoutes);          

export default app;