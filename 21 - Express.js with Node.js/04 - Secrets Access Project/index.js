//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is 080205

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var password = "";

app.use(express.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
    password = req.body["password"];
    next();
}

app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (password == "\u0030\u0038\u0030\u0032\u0030\u0035") {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/fail.html");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});