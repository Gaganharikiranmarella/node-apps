import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`${MONGODB_URI}`)

  .then(() => {
    console.log("MongoDB connected");
    app.listen(8080, () => {
      console.log("Server started on http://localhost:8080");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/greet", (req, res) => {
  res.send("Welcome to the website");
});

app.get("/name", (req, res) => {
  res.send("Welcome to the browser, Marella Gagan Hari Kiran");
});

app.get("/weather", (req, res) => {
  res.json({ temperature: "41°C" });
});

const MONGODB_URI = process.env.MONGODB_URI

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

export default app;
