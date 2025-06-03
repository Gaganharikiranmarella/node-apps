import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import productRoutes from "./products.js";
import registerRoutes from "./register.js";
import loginRoutes from "./login.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/gcet")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(8080, () => {
      console.log("Server Started. Welcome Gagan!");
    });
  })
  .catch(err => console.error("MongoDB connection error:", err));

// Base routes
app.get("/", (req, res) => res.send("Hello World"));
app.get("/greet", (req, res) => res.send("Welcome to the website"));
app.get("/name", (req, res) => res.send("Welcome to the browser, Marella Gagan Hari Kiran"));
app.get("/weather", (req, res) => res.json({ temperature: "41°C" }));

// Modular Routes
app.use("/products", productRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);