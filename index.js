const express = require("express");
const dotenv = require("dotenv");
const { log } = require("console");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req,res)=> {
    res.send("Hello there! Api is working")
})

app.post("/", (req,res)=> {
    log("================================================")
    log(req)
    res.status(200)
    res.end()
    log("================================================")
})

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));