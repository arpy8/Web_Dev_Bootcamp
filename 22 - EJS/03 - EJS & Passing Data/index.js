import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var title = "Enter your name";

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {    
    res.render(__dirname + "/views/index.ejs", {title : title});
});

app.post("/submit", (req, res) => {
  var fName = req.body["fName"];    
  var lName = req.body["lName"];
  title = `There are ${(fName.length + lName.length)} characters in your name.`;
  
  res.render(__dirname + "/views/index.ejs", {title : title});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});