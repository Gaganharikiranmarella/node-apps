import express from "express"
const app = express()
app.listen(8080, () => {
    console.log("Server Started. Welcome Gagan!");
}); 

app.get("/", (req, res) => {
    return res.send("Hello World");
});

app.get("/greet",(req,res) => {res.send("Welcome to the website")} )
app.get("/name", (req,res) => {res.send("Welcome to the browser, Marella Gagan Hari Kiran")} )