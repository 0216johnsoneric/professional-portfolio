const express = require('express');
const logger = require('morgan');
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/portfolio", 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/api/email", (req, res) => {
    console.log(req.body)
    db.Email.create({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    .then((res) => {
        console.log(res);
    })
})
app.listen(PORT, ()=> {
    console.log(`app on port ${PORT}`);
})