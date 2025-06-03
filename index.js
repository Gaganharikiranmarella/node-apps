import express from "express";
import cors from "cors"; 
import mongoose from "mongoose";

const app = express();
app.use(cors()); // CORS middleware

// Connect to MongoDB once before starting the server
mongoose.connect("mongodb://localhost:27017/gcet")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(8080, () => {
      console.log("Server Started. Welcome Gagan!");
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

const userSchema = new mongoose.Schema({   // fixed typo from userScheme to userSchema
  name: { type: String },
});

const User = mongoose.model("User", userSchema); // Capitalized model name by convention

app.get("/", (req, res) => {
  return res.send("Hello World");
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

// Fix for register route:
app.get("/register", async (req, res) => {
  try {
    // Insert multiple documents as array
    const result = await User.insertMany([{ name: "Sarah" }, { name: "Gagan" }]);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
