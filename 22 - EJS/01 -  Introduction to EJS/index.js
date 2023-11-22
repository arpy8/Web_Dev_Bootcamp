import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

var dayType = (new Date().getDay()>5)?"weekend":"weekday";
var advice = (new Date().getDay()>5)?"no party tho coz you don't have any friends 🤣🫵":"Work time bruv";


app.get("/", (req, res) => {    
        res.render(__dirname + "/views/index.ejs", { dayType: dayType , advice: advice});
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});