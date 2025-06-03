import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB before starting server
mongoose.connect("mongodb://localhost:27017/gcet")
  .then(() => {
    console.log("✅ MongoDB connected");

    // Start server
    app.listen(8080, () => {
      console.log("🚀 Server Started on http://localhost:8080");
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
  });

// Schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  pass: {type: String, required: true}
});


const User = mongoose.model("User", userSchema);

// Basic routes
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

app.get("/products", (req, res) => {
  const products = [
    { name: "Apple", price: 20, qty: 50 },
    { name: "Mango", price: 25, qty: 40 },
    { name: "Orange", price: 15, qty: 60 },
    { name: "Blueberry", price: 35, qty: 30 },
    { name: "Strawberry", price: 30, qty: 45 },
    { name: "Pineapple", price: 50, qty: 45 },
  ];
  res.json(products);
});

// POST /register to insert users
app.post("/register", async (req, res) => {
  try {
    const { users } = req.body;

    if (!Array.isArray(users)) {
      return res.status(400).json({ error: "Expected 'users' array in request body." });
    }

    const result = await User.insertMany(users);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

