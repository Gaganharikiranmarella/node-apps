// index.js
import express from "express";
import cors from "cors"; 
import mongoose from "mongoose";

const app = express();
app.use(cors()); // CORS middleware

app.listen(8080, () => {
  mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started. Welcome Gagan!");
});

const userScheme = mongoose.Schema({
  name : {type: String},
});

const user = mongoose.model("User", userSchema);

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
    { name: "Pineapple", price: 50, qty: 45},
  ];
  res.json(products);
});

