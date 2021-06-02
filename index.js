"use strict";

const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://rrgks:dltjrgh123@node-react.ganxq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));


app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`${port}포트에서 서버 시작`))