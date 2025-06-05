import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";  // Added cart routes

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI, {
    serverSelectionTimeoutMS: 10000, // 10 seconds timeout to avoid hanging
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(8080, () => {
      console.log("🚀 Server started on http://localhost:8080");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Exit if DB connection fails
  });

// Basic test endpoints
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/greet", (req, res) => {
  res.send("Welcome to the website");
});

app.get("/name", (req, res) => {
  res.send("Made by:- Marella Gagan Hari Kiran");
});

app.get("/weather", (req, res) => {
  res.json({ temperature: "41°C" });
});

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/cart", cartRoutes);  // Mounted cart routes

export default app;
