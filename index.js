import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/gcet")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(8080, () => console.log("🚀 Server running on http://localhost:8080"));
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Register routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
