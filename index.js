// index.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./userRoutes.js";
import productRoutes from "./productRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/gcet")
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(8080, () => {
      console.log("🚀 Server running on http://localhost:8080");
    });
  })
  .catch(err => console.error("❌ DB Error:", err));

// Base Routes
app.get("/", (req, res) => res.send("Hello World"));
app.get("/greet", (req, res) => res.send("Welcome to the website"));
app.get("/name", (req, res) => res.send("Welcome to the browser, Marella Gagan Hari Kiran"));
app.get("/weather", (req, res) => res.json({ temperature: "41°C" }));

// Custom Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
