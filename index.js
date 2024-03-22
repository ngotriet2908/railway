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
    log("Request")
    log(req)
    log("Response")
    log(res)
    res.status(200)
    res.end()
})

app.listen(PORT, () => console.log(`Sever is running port ${PORT} ...`));