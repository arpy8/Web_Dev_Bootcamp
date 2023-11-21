import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
}); 

app.get("/", (req, res) => {
  res.send("<a href='/about'>Hi<a>");
});

app.get("/about", (req, res) => {
  res.send("This is an about section");
});