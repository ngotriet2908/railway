const express = require("express");
const dotenv = require("dotenv");
const { log } = require("console");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req,res)=> {
    res.send("Hello there! Api is working")
})

app.post("/", (req,res)=> {
    log("================================================")
    log(req)
    log("-------------------header-----------------------")
    log(JSON.stringify(req.headers));
    log("-------------------query------------------------")
    log(req.query);
    log("--------------------body------------------------")
    log(req.body);
    log(JSON.stringify(req.body));
    log("---------------originalUrl----------------------")
    log(req.originalUrl);
    log("-----------------------url----------------------")
    log(req.url);
    log("================================================")
    res.status(200)
    res.end()
})

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));