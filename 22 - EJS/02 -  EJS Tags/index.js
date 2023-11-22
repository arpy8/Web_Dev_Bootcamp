import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];
var title = "EJS Tags";

app.get("/", (req, res) => {    
        res.render(__dirname + "/views/index.ejs", { title:title, friends: friends, htmlContent: "<em>This is italic</em>"});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});