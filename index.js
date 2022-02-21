require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.port || 4000

dotenv.config();

mongoose.connect(
    process.env.DB_connect,
    { useUnifiedTopology: true, useNewUrlParser: true},
    ()=> console.log("connected to db")
);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const routeLibManage = require("./router");

app.use("/api", routeLibManage);

app.listen(port,() => console.log(`This port is running on the ${port}`))